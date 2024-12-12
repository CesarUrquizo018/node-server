// src/controllers/controllers_auth.js
const authService = require('../services/services_auth');

const authControllers = {
    login: async (req, res) => {
        const { email, contrasena } = req.body;

        if (!email || !contrasena) {
            return res.status(400).json({ message: 'Por favor, proporciona un correo electrónico y una contraseña.' });
        }

        try {
            const result = await authService.login(email, contrasena);
            res.status(200).json(result);
        } catch (error) {
            console.error('Error en el inicio de sesión:', error.message);
            res.status(error.status || 500).json({ message: error.message });
        }
    },

    register: async (req, res) => {
        const { nombre, codigo, email, contrasena, foto_perfil } = req.body;

        try {
            const result = await authService.register({ nombre, codigo, email, contrasena, foto_perfil });
            res.status(201).json(result);
        } catch (error) {
            console.error('Error en el registro:', error.message);
            res.status(error.status || 500).json({ message: error.message });
        }
    },

    refreshToken: async (req, res) => {
        const { token } = req.body;

        if (!token) {
            return res.status(400).json({ message: 'No se proporcionó un token.' });
        }

        try {
            const result = await authService.refreshToken(token);
            res.status(200).json(result);
        } catch (error) {
            console.error('Error al renovar el token:', error.message);
            res.status(error.status || 401).json({ message: error.message });
        }
    },

    // Controlador para obtener el usuario actual
    getUser: async (req, res) => {
        const token = req.header('x-auth-token');  // Obtén el token del encabezado

        if (!token) {
            return res.status(401).json({ message: 'No token, autorización denegada' });
        }

        try {
            const usuario = await authService.getUserFromToken(token);
            res.status(200).json(usuario);  // Retorna la información del usuario
        } catch (error) {
            console.error('Error al obtener los detalles del usuario:', error.message);
            res.status(error.status || 500).json({ message: error.message });
        }
    },
};

module.exports = authControllers;
