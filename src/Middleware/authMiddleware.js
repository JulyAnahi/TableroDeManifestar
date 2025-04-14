const jwt = require('jsonwebtoken')
require('dotenv').config();

const jwtSecret = process.env.JWT_SECRET;

const authMiddleware =(req,res, next) =>{
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) return res.status(401).json({error: 'Token no proporcionado'});
    try {
        const decoded = jwt.verify(token,jwtSecret);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(403).json({error:'Token invalido o expirado'});
    }
};
module.exports = authMiddleware;