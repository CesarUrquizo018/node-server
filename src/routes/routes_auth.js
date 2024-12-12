// src/routes/routes_auth.js
const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/controllers_auth');

router.post('/login', authControllers.login);
router.post('/register', authControllers.register);
router.post('/refresh-token', authControllers.refreshToken);

// Nueva ruta para obtener el usuario actual
router.get('/me', authControllers.getUser);  // Aquí se agrega el nuevo endpoint

module.exports = router;
