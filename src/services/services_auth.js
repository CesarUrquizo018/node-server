// src/services/services_auth.js
const Usuario = require('../models/model_usuario');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authService = {
    login: async (email, contrasena) => {
        const usuario = await Usuario.findOne({ where: { email } });

        if (!usuario) {
            throw { status: 401, message: 'Correo electrónico o contraseña incorrectos.' };
        }

        const isMatch = await bcrypt.compare(contrasena, usuario.contrasena);
        if (!isMatch) {
            throw { status: 401, message: 'Correo electrónico o contraseña incorrectos.' };
        }

        const token = jwt.sign(
            { userId: usuario.id_usuario, nombre: usuario.nombre, email: usuario.email },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN || '1h' }
        );

        return {
            token,
            usuario: { id: usuario.id_usuario, nombre: usuario.nombre, email: usuario.email },
            expiresIn: 3600,
            message: 'Inicio de sesión exitoso.',
        };
    },

    register: async ({ nombre, codigo, email, contrasena, foto_perfil }) => {
        const usuarioExistente = await Usuario.findOne({ where: { email } });
        if (usuarioExistente) {
            throw { status: 400, message: 'El correo electrónico ya está registrado.' };
        }

        const hashedPassword = await bcrypt.hash(contrasena, 10);
        const nuevoUsuario = await Usuario.create({
            nombre,
            codigo,
            email,
            contrasena: hashedPassword,
            foto_perfil,
        });

        return {
            message: 'Usuario creado exitosamente.',
            usuario: { id: nuevoUsuario.id_usuario, nombre: nuevoUsuario.nombre, email: nuevoUsuario.email },
        };
    },

    refreshToken: async (token) => {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET, { ignoreExpiration: true });
            const newToken = jwt.sign(
                { userId: decoded.userId, nombre: decoded.nombre, email: decoded.email },
                process.env.JWT_SECRET,
                { expiresIn: process.env.JWT_EXPIRES_IN || '1h' }
            );

            return { token: newToken, expiresIn: 3600 };
        } catch (error) {
            throw { status: 401, message: 'Token no válido.' };
        }
    },

    // Nueva función para obtener los detalles del usuario actual
    getUserFromToken: async (token) => {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const usuario = await Usuario.findByPk(decoded.userId);  // Obtiene el usuario por ID
            if (!usuario) {
                throw { status: 404, message: 'Usuario no encontrado' };
            }
            return usuario;
        } catch (error) {
            throw { status: 401, message: 'Token no válido' };
        }
    },
};

module.exports = authService;
