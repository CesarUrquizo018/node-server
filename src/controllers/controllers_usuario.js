// src/controllers/controllers_usuario.js

const usuarioService = require('../services/services_usuario');

const usuarioController = {
    getAllUsuarios: async (req, res) => {
        try {
            const usuarios = await usuarioService.getAllUsuarios();
            res.json(usuarios);
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
            res.status(500).send({ message: 'Error al obtener los usuarios' });
        }
    },

    getUsuarioById: async (req, res) => {
        try {
            const usuario = await usuarioService.getUsuarioById(req.params.id);
            if (usuario) {
                res.json(usuario);
            } else {
                res.status(404).send({ message: 'Usuario no encontrado' });
            }
        } catch (error) {
            console.error('Error al obtener el usuario:', error);
            res.status(500).send({ message: 'Error al obtener el usuario' });
        }
    },

    createUsuario: async (req, res) => {
        try {
            const usuario = await usuarioService.createUsuario(req.body);
            res.status(201).json(usuario);
        } catch (error) {
            console.error('Error al crear el usuario:', error);
            res.status(500).send({ message: 'Error al crear el usuario' });
        }
    },

    updateUsuario: async (req, res) => {
        try {
            const usuario = await usuarioService.updateUsuario(req.params.id, req.body);
            if (usuario) {
                res.json(usuario);
            } else {
                res.status(404).send({ message: 'Usuario no encontrado' });
            }
        } catch (error) {
            console.error('Error al actualizar el usuario:', error);
            res.status(500).send({ message: 'Error al actualizar el usuario' });
        }
    },

    deleteUsuario: async (req, res) => {
        try {
            const result = await usuarioService.deleteUsuario(req.params.id);
            if (result) {
                res.send({ message: 'Usuario eliminado' });
            } else {
                res.status(404).send({ message: 'Usuario no encontrado' });
            }
        } catch (error) {
            console.error('Error al eliminar el usuario:', error);
            res.status(500).send({ message: 'Error al eliminar el usuario' });
        }
    }
};

module.exports = usuarioController;
