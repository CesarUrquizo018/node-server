const ProyectoTema = require('../models/model_proyecto_tema');
const Proyecto = require('../models/model_proyecto');
const Tema = require('../models/model_tema');

const proyectoTemaService = {
    getAllProyectoTemas: async () => {
        try {
            return await ProyectoTema.findAll({
                include: [
                    { model: Proyecto, attributes: ['titulo'] },
                    { model: Tema, attributes: ['nombre_tema'] }
                ]
            });
        } catch (error) {
            throw new Error('Error al obtener las relaciones proyecto-tema');
        }
    },

    getProyectoTemaById: async (id_proyecto, id_tema) => {
        try {
            return await ProyectoTema.findOne({
                where: { id_proyecto, id_tema },
                include: [
                    { model: Proyecto, attributes: ['titulo'] },
                    { model: Tema, attributes: ['nombre_tema'] }
                ]
            });
        } catch (error) {
            throw new Error('Error al obtener la relación proyecto-tema');
        }
    },

    createProyectoTema: async (data) => {
        try {
            return await ProyectoTema.create(data);
        } catch (error) {
            throw new Error('Error al crear la relación proyecto-tema');
        }
    },

    deleteProyectoTema: async (id_proyecto, id_tema) => {
        try {
            return await ProyectoTema.destroy({ where: { id_proyecto, id_tema } });
        } catch (error) {
            throw new Error('Error al eliminar la relación proyecto-tema');
        }
    }
};

module.exports = proyectoTemaService;
