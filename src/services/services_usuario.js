// src/services/services_usuario.js
const Usuario = require('../models/model_usuario');
const bcrypt = require('bcryptjs');

const usuarioService = {
    getAllUsuarios: async () => {
        try {
            return await Usuario.findAll();
        } catch (error) {
            throw new Error('Error al obtener usuarios');
        }
    },

    getUsuarioById: async (id) => {
        try {
            return await Usuario.findByPk(id);
        } catch (error) {
            throw new Error('Error al obtener el usuario');
        }
    },

    createUsuario: async (data) => {
        try {
            const hashedPassword = await bcrypt.hash(data.contrasena, 10);
            return await Usuario.create({ ...data, contrasena: hashedPassword });
        } catch (error) {
            throw new Error('Error al crear el usuario');
        }
    },

    updateUsuario: async (id, data) => {
        try {
            const usuario = await Usuario.findByPk(id);
            if (usuario) {
                return await usuario.update(data);
            }
            return null;
        } catch (error) {
            throw new Error('Error al actualizar el usuario');
        }
    },

    deleteUsuario: async (id) => {
        try {
            return await Usuario.destroy({ where: { id_usuario: id } });
        } catch (error) {
            throw new Error('Error al eliminar el usuario');
        }
    }
};

module.exports = usuarioService;
