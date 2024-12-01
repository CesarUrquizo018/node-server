const calificacionService = require('../services/services_calificacion');

const calificacionController = {
    getAllCalificaciones: async (req, res) => {
        try {
            const calificaciones = await calificacionService.getAllCalificaciones();
            res.json(calificaciones);
        } catch (error) {
            console.error('Error al obtener calificaciones:', error);
            res.status(500).send({ message: 'Error al obtener las calificaciones' });
        }
    },

    getCalificacionById: async (req, res) => {
        try {
            const calificacion = await calificacionService.getCalificacionById(req.params.id);
            if (calificacion) {
                res.json(calificacion);
            } else {
                res.status(404).send({ message: 'Calificación no encontrada' });
            }
        } catch (error) {
            console.error('Error al obtener la calificación:', error);
            res.status(500).send({ message: 'Error al obtener la calificación' });
        }
    },

    createCalificacion: async (req, res) => {
        try {
            const calificacion = await calificacionService.createCalificacion(req.body);
            res.status(201).json(calificacion);
        } catch (error) {
            console.error('Error al crear la calificación:', error);
            res.status(500).send({ message: 'Error al crear la calificación' });
        }
    },

    updateCalificacion: async (req, res) => {
        try {
            const calificacion = await calificacionService.updateCalificacion(req.params.id, req.body);
            if (calificacion) {
                res.json(calificacion);
            } else {
                res.status(404).send({ message: 'Calificación no encontrada' });
            }
        } catch (error) {
            console.error('Error al actualizar la calificación:', error);
            res.status(500).send({ message: 'Error al actualizar la calificación' });
        }
    },

    deleteCalificacion: async (req, res) => {
        try {
            const result = await calificacionService.deleteCalificacion(req.params.id);
            if (result) {
                res.send({ message: 'Calificación eliminada' });
            } else {
                res.status(404).send({ message: 'Calificación no encontrada' });
            }
        } catch (error) {
            console.error('Error al eliminar la calificación:', error);
            res.status(500).send({ message: 'Error al eliminar la calificación' });
        }
    },

    getCalificacionesByProyectoId: async (req, res) => {
        try {
            const calificaciones = await calificacionService.getCalificacionesByProyectoId(req.params.id_proyecto);
            if (calificaciones) {
                res.json(calificaciones);
            } else {
                res.status(404).send({ message: 'Calificaciones no encontradas para este proyecto' });
            }
        } catch (error) {
            console.error('Error al obtener calificaciones por ID de proyecto:', error);
            res.status(500).send({ message: 'Error al obtener las calificaciones' });
        }
    }
};

module.exports = calificacionController;
