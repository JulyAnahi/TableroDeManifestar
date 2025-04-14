// Importo los modulo que voy a usar
const express = require('express');
const PATH = require('path');
const morgan = require('morgan');
const multer = require('multer');
const {v4:uuid} = require('uuid');
const {format}= require('timeago.js')
// inicializaciones
//una vez que tengo express puedo utilizarla en una constante
const app = express();
require('./database');
//Settings
app.set('PORT', process.env.PORT || 3000)

// le digo donde esta la carpeta views
app.set('views', PATH.join(__dirname,'views' ))
// ejs viene integrado en express no nesecito requerirlo
app.set('view engine' , 'ejs');

//Middlewares que van a procesar todo antes de que lleguen a las rutas
app.use(morgan('dev'));
//traduce la informacion que losformularios envian false por no voy a enviar nada complicado por que lo proceso con multer
app.use(express.urlencoded({extended:false}));
app.use(express.json());

const storage = multer.diskStorage({
    destination: PATH.join(__dirname, 'public/img/uploads'),
    filename:(req, file, cb, filename)=>{
        cb(null, uuid() + PATH.extname(file.originalname))
    }
})
app.use(multer({storage:storage}).single('image'));//single por que subo una imagen a la vez desde el input image

//Global variavles
app.use((req,res,next)=>{
    app.locals.format =format;
    next();
})
//Routes
// Nueva ruta para registro
app.get('/register', (req, res) => {
    res.render('register');
  });
  
  // Ruta para login
  app.get('/login', (req, res) => {
    res.render('login');
  });
app.use('/api/auth', require('./routes/auth'));

app.use(require('./routes/index'))


//static files
app.use(express.static(PATH.join(__dirname, 'public')));

//Start the server
app.listen(3000,()=>{console

console.log(`Server on port: ${app.get('PORT')}`)
});
