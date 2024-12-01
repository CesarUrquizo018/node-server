const Fuente = require('../models/model_fuente');
const Proyecto = require('../models/model_proyecto');

const fuenteService = {
    getAllFuentes: async () => {
        try {
            return await Fuente.findAll({
                include: [{ model: Proyecto, attributes: ['titulo'] }],
                order: [['createdAt', 'DESC']]
            });
        } catch (error) {
            throw new Error('Error al obtener fuentes');
        }
    },

    getFuenteById: async (id) => {
        try {
            return await Fuente.findByPk(id, {
                include: [{ model: Proyecto, attributes: ['titulo'] }]
            });
        } catch (error) {
            throw new Error('Error al obtener la fuente');
        }
    },

    createFuente: async (data) => {
        try {
            return await Fuente.create(data);
        } catch (error) {
            throw new Error('Error al crear la fuente');
        }
    },

    updateFuente: async (id, data) => {
        try {
            const fuente = await Fuente.findByPk(id);
            if (fuente) {
                return await fuente.update(data);
            }
            return null;
        } catch (error) {
            throw new Error('Error al actualizar la fuente');
        }
    },

    deleteFuente: async (id) => {
        try {
            return await Fuente.destroy({ where: { id_fuente: id } });
        } catch (error) {
            throw new Error('Error al eliminar la fuente');
        }
    },

    getFuentesByProyectoId: async (id_proyecto) => {
        try {
            return await Fuente.findAll({
                where: { id_proyecto },
                include: [{ model: Proyecto, attributes: ['titulo'] }],
                order: [['createdAt', 'DESC']]
            });
        } catch (error) {
            throw new Error('Error al obtener las fuentes por proyecto');
        }
    }
};

module.exports = fuenteService;
