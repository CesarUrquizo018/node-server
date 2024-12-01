const Otro = require('../models/model_otro');

const otroService = {
    getAllOtros: async () => {
        try {
            return await Otro.findAll({
                include: ['Proyecto']  // Incluye la asociación con Proyecto
            });
        } catch (error) {
            throw new Error('Error al obtener los registros de Otro');
        }
    },

    getOtroById: async (id) => {
        try {
            return await Otro.findByPk(id, {
                include: ['Proyecto']  // Incluye la asociación con Proyecto
            });
        } catch (error) {
            throw new Error('Error al obtener el registro de Otro');
        }
    },

    createOtro: async (data) => {
        try {
            return await Otro.create(data);
        } catch (error) {
            throw new Error('Error al crear el registro de Otro');
        }
    },

    updateOtro: async (id, data) => {
        try {
            const otro = await Otro.findByPk(id);
            if (otro) {
                return await otro.update(data);
            }
            return null;
        } catch (error) {
            throw new Error('Error al actualizar el registro de Otro');
        }
    },

    deleteOtro: async (id) => {
        try {
            return await Otro.destroy({ where: { id_otro: id } });
        } catch (error) {
            throw new Error('Error al eliminar el registro de Otro');
        }
    },

    getOtrosByProyectoId: async (id_proyecto) => {
        try {
            return await Otro.findAll({
                where: { id_proyecto }
            });
        } catch (error) {
            throw new Error('Error al obtener los registros de Otro por proyecto');
        }
    }
};

module.exports = otroService;
