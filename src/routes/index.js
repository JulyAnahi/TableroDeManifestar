//importamos enrutador
const {Router, request} = require('express');
// permite definir un objeto router
const router = Router();
const Image = require('../models/image');
const { unlink } = require('fs-extra');
const path = require('path')
//ruta inicial
router.get('/', async (req, res) =>{
  const images = await Image.find();
  console.log(images)
  res.render('index', {images})
});
//ruta al formulario para subir imagenes
router.get('/upload', (req, res)=>{
    res.render('upload');
});

router.post('/upload', async (req, res)=>{
    const image = new Image();
    image.title = req.body.title;
    image.description = req.body.description;
    image.filname = req.file.filename;
    image.path = '/img/uploads/' +req.file.filename;
    image.originalname = req.file.filename;
    image.mimeType = req.file.mimetype;
    image.size = req.file.size;

    await image.save();
    //redirecciona a la vista inicial
    res.redirect('/');
});

router.get('/image/:id', async (req,res)=>{
    const image = await Image.findById(req.params.id)
    res.render('profile', {image})
})
router.get('/image/:id/delete', async (req, res)=>{
    const { id } =req.params;
    //limina de la base de datos
    const image = await Image.findByIdAndDelete(id);
    // con unlink propiedaad del modulo fs-extra eliminamos  a partir de la ruta lo que tenemos tambien el la carpeta uploads 
    await unlink(path.resolve('./src/public/' + image.path));
    res.redirect('/');

});




module.exports =router;