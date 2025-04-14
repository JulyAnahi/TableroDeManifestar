const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();
console.log('Variables de entorno cargadas:', process.env.PORT);

const  pepper = process.env.PEPPER;
const jwtSecret = process.env.JWT_SECRET;
const saltRound = 10;
console.log('JWT_SECRET:', process.env.JWT_SECRET); // debería mostrar: tu_clave_secreta

exports.register =async (req, res)=>{
    const { email, password } = req.body
    try {
        const hashedPasword = await bcrypt.hash(password + pepper, saltRound)
        const user = new User({ email,password:hashedPasword })
        await user.save();
        res.status(201).json({message:'Usuario registrado correctamente'})
    } catch (err) {
        res.status(500).json({error: 'Error en el registro'})

    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    console.log('Intentando login con:', email); // ← LOG
  
    try {
      const user = await User.findOne({ email });
      if (!user) {
        console.log('Usuario no encontrado');
        return res.status(401).json({ error: 'Usuario no encontrado' });
      }
  
      const valid = await bcrypt.compare(password + pepper, user.password);
      if (!valid) {
        console.log('Contraseña incorrecta');
        return res.status(401).json({ error: 'Contraseña incorrecta' });
      }
  
      const token = jwt.sign({ userId: user._id }, jwtSecret, { expiresIn: '1h' });
      res.json({ token });
    } catch (err) {
      console.error('Error en login:', err); // 👈 log del error
      res.status(500).json({ error: 'Error en el servidor' });
    }
  };