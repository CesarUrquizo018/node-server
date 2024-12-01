const Calificacion = require('../models/model_calificacion');

const calificacionService = {
    getAllCalificaciones: async () => {
        try {
            return await Calificacion.findAll({
                include: ['Usuario', 'Proyecto']  // Ajustar según la asociación con Usuario y Proyecto
            });
        } catch (error) {
            throw new Error('Error al obtener las calificaciones');
        }
    },

    getCalificacionById: async (id) => {
        try {
            return await Calificacion.findByPk(id, {
                include: ['Usuario', 'Proyecto']  // Ajustar según la asociación con Usuario y Proyecto
            });
        } catch (error) {
            throw new Error('Error al obtener la calificación');
        }
    },

    createCalificacion: async (data) => {
        try {
            return await Calificacion.create(data);
        } catch (error) {
            throw new Error('Error al crear la calificación');
        }
    },

    updateCalificacion: async (id, data) => {
        try {
            const calificacion = await Calificacion.findByPk(id);
            if (calificacion) {
                return await calificacion.update(data);
            }
            return null;
        } catch (error) {
            throw new Error('Error al actualizar la calificación');
        }
    },

    deleteCalificacion: async (id) => {
        try {
            return await Calificacion.destroy({ where: { id_calificacion: id } });
        } catch (error) {
            throw new Error('Error al eliminar la calificación');
        }
    },
    
    getCalificacionesByProyectoId: async (id_proyecto) => {
        try {
            return await Calificacion.findAll({
                where: { id_proyecto },
                include: ['Usuario', 'Proyecto'] // Ajustar según la asociación con Usuario y Proyecto
            });
        } catch (error) {
            throw new Error('Error al obtener las calificaciones por ID de proyecto');
        }
    },
};

module.exports = calificacionService;
