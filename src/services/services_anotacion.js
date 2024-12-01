const Anotacion = require('../models/model_anotacion');
const Usuario = require('../models/model_usuario');
const Proyecto = require('../models/model_proyecto');

const anotacionService = {
    getAllAnotaciones: async () => {
        try {
            return await Anotacion.findAll({
                include: [
                    { model: Usuario, attributes: ['nombre'] },
                    { model: Proyecto, attributes: ['titulo'] }
                ]
            });
        } catch (error) {
            throw new Error('Error al obtener anotaciones');
        }
    },

    getAnotacionById: async (id) => {
        try {
            return await Anotacion.findByPk(id, {
                include: [
                    { model: Usuario, attributes: ['nombre'] },
                    { model: Proyecto, attributes: ['titulo'] }
                ]
            });
        } catch (error) {
            throw new Error('Error al obtener la anotación');
        }
    },

    createAnotacion: async (data) => {
        try {
            const usuario = await Usuario.findByPk(data.id_usuario);
            const proyecto = await Proyecto.findByPk(data.id_proyecto);
            if (!usuario) throw new Error('El usuario no existe');
            if (!proyecto) throw new Error('El proyecto no existe');

            return await Anotacion.create(data);
        } catch (error) {
            throw new Error('Error al crear la anotación');
        }
    },

    updateAnotacion: async (id, data) => {
        try {
            const anotacion = await Anotacion.findByPk(id);
            if (anotacion) {
                return await anotacion.update(data);
            }
            return null;
        } catch (error) {
            throw new Error('Error al actualizar la anotación');
        }
    },

    deleteAnotacion: async (id) => {
        try {
            return await Anotacion.destroy({ where: { id_anotacion: id } });
        } catch (error) {
            throw new Error('Error al eliminar la anotación');
        }
    },

    getAnotacionesByProyectoId: async (id_proyecto, page = 0, limit = 10) => {
        try {
            return await Anotacion.findAll({
                where: { id_proyecto },
                include: [{ model: Usuario, attributes: ['nombre'] }],
                limit,
                offset: page * limit,
                order: [['createdAt', 'DESC']]
            });
        } catch (error) {
            throw new Error('Error al obtener las anotaciones por proyecto');
        }
    }
};

module.exports = anotacionService;
