const Universidad = require('../models/model_universidad');

const universidadService = {
    getAllUniversidades: async () => {
        try {
            return await Universidad.findAll();
        } catch (error) {
            throw new Error('Error al obtener universidades');
        }
    },

    getUniversidadById: async (id) => {
        try {
            return await Universidad.findByPk(id);
        } catch (error) {
            throw new Error('Error al obtener la universidad');
        }
    },

    createUniversidad: async (data) => {
        try {
            return await Universidad.create(data);
        } catch (error) {
            throw new Error('Error al crear la universidad');
        }
    },

    updateUniversidad: async (id, data) => {
        try {
            const universidad = await Universidad.findByPk(id);
            if (universidad) {
                return await universidad.update(data);
            }
            throw new Error('Universidad no encontrada');
        } catch (error) {
            throw new Error('Error al actualizar la universidad');
        }
    },

    deleteUniversidad: async (id) => {
        try {
            return await Universidad.destroy({ where: { id_universidad: id } });
        } catch (error) {
            throw new Error('Error al eliminar la universidad');
        }
    }
};

module.exports = universidadService;
