const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', authMiddleware, (req, res) => {
  res.json({ message: 'Bienvenido a tu perfil privado', userId: req.user.userId });
});

module.exports = router;
