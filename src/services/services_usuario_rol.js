const UsuarioRol = require('../models/model_usuario_rol');

const usuarioRolService = {
    getAllUsuarioRoles: async () => {
        try {
            return await UsuarioRol.findAll();
        } catch (error) {
            throw new Error('Error al obtener las relaciones usuario-rol');
        }
    },

    createUsuarioRol: async (data) => {
        try {
            return await UsuarioRol.create(data);
        } catch (error) {
            throw new Error('Error al crear la relación usuario-rol');
        }
    },

    deleteUsuarioRol: async (id_usuario, id_rol) => {
        try {
            return await UsuarioRol.destroy({
                where: { id_usuario, id_rol }
            });
        } catch (error) {
            throw new Error('Error al eliminar la relación usuario-rol');
        }
    }
};

module.exports = usuarioRolService;
