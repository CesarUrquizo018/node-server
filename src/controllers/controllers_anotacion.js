const anotacionService = require('../services/services_anotacion');

const anotacionController = {
    getAllAnotaciones: async (req, res) => {
        try {
            const anotaciones = await anotacionService.getAllAnotaciones();
            res.json(anotaciones);
        } catch (error) {
            console.error('Error al obtener anotaciones:', error);
            res.status(500).send({ message: 'Error al obtener anotaciones' });
        }
    },

    getAnotacionById: async (req, res) => {
        try {
            const anotacion = await anotacionService.getAnotacionById(req.params.id);
            if (anotacion) {
                res.json(anotacion);
            } else {
                res.status(404).send({ message: 'Anotación no encontrada' });
            }
        } catch (error) {
            console.error('Error al obtener la anotación:', error);
            res.status(500).send({ message: 'Error al obtener la anotación' });
        }
    },

    createAnotacion: async (req, res) => {
        try {
            const anotacion = await anotacionService.createAnotacion(req.body);
            res.status(201).json(anotacion);
        } catch (error) {
            console.error('Error al crear la anotación:', error);
            res.status(500).send({ message: 'Error al crear la anotación' });
        }
    },

    updateAnotacion: async (req, res) => {
        try {
            const anotacion = await anotacionService.updateAnotacion(req.params.id, req.body);
            if (anotacion) {
                res.json(anotacion);
            } else {
                res.status(404).send({ message: 'Anotación no encontrada' });
            }
        } catch (error) {
            console.error('Error al actualizar la anotación:', error);
            res.status(500).send({ message: 'Error al actualizar la anotación' });
        }
    },

    deleteAnotacion: async (req, res) => {
        try {
            const result = await anotacionService.deleteAnotacion(req.params.id);
            if (result) {
                res.send({ message: 'Anotación eliminada' });
            } else {
                res.status(404).send({ message: 'Anotación no encontrada' });
            }
        } catch (error) {
            console.error('Error al eliminar la anotación:', error);
            res.status(500).send({ message: 'Error al eliminar la anotación' });
        }
    },

    getAnotacionesByProyectoId: async (req, res) => {
        const { page, limit } = req.query;
        try {
            const anotaciones = await anotacionService.getAnotacionesByProyectoId(
                req.params.id_proyecto,
                parseInt(page) || 0,
                parseInt(limit) || 10
            );
            res.json(anotaciones);
        } catch (error) {
            console.error('Error al obtener las anotaciones:', error);
            res.status(500).send({ message: 'Error al obtener las anotaciones' });
        }
    }
};

module.exports = anotacionController;
