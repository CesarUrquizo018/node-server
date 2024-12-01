const Facultad = require('../models/model_facultad');

const facultadService = {
    getAllFacultades: async () => {
        try {
            return await Facultad.findAll({
                include: ['Universidad']  // Incluye la asociación con Universidad
            });
        } catch (error) {
            throw new Error('Error al obtener facultades');
        }
    },

    getFacultadById: async (id) => {
        try {
            return await Facultad.findByPk(id, {
                include: ['Universidad']  // Incluye la asociación con Universidad
            });
        } catch (error) {
            throw new Error('Error al obtener la facultad');
        }
    },

    createFacultad: async (data) => {
        try {
            return await Facultad.create(data);
        } catch (error) {
            throw new Error('Error al crear la facultad');
        }
    },

    updateFacultad: async (id, data) => {
        try {
            const facultad = await Facultad.findByPk(id);
            if (facultad) {
                return await facultad.update(data);
            }
            return null;
        } catch (error) {
            throw new Error('Error al actualizar la facultad');
        }
    },

    deleteFacultad: async (id) => {
        try {
            return await Facultad.destroy({ where: { id_facultad: id } });
        } catch (error) {
            throw new Error('Error al eliminar la facultad');
        }
    }
};

module.exports = facultadService;
