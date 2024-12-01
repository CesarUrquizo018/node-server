const Rol = require('../models/model_rol');

const rolService = {
    getAllRoles: async () => {
        try {
            return await Rol.findAll();
        } catch (error) {
            throw new Error('Error al obtener los roles');
        }
    },

    getRolById: async (id) => {
        try {
            return await Rol.findByPk(id);
        } catch (error) {
            throw new Error('Error al obtener el rol');
        }
    },

    createRol: async (data) => {
        try {
            return await Rol.create(data);
        } catch (error) {
            throw new Error('Error al crear el rol');
        }
    },

    updateRol: async (id, data) => {
        try {
            const rol = await Rol.findByPk(id);
            if (rol) {
                return await rol.update(data);
            }
            return null;
        } catch (error) {
            throw new Error('Error al actualizar el rol');
        }
    },

    deleteRol: async (id) => {
        try {
            return await Rol.destroy({ where: { id_rol: id } });
        } catch (error) {
            throw new Error('Error al eliminar el rol');
        }
    }
};

module.exports = rolService;
