const recursoProyectoService = require('../services/services_recurso_proyecto');

const recursoProyectoController = {
    getAllRecursos: async (req, res) => {
        try {
            const recursos = await recursoProyectoService.getAllRecursos();
            res.json(recursos);
        } catch (error) {
            console.error('Error al obtener los recursos:', error);
            res.status(500).send({ message: 'Error al obtener los recursos' });
        }
    },

    getRecursoById: async (req, res) => {
        try {
            const recurso = await recursoProyectoService.getRecursoById(req.params.id);
            if (recurso) {
                res.json(recurso);
            } else {
                res.status(404).send({ message: 'Recurso no encontrado' });
            }
        } catch (error) {
            console.error('Error al obtener el recurso:', error);
            res.status(500).send({ message: 'Error al obtener el recurso' });
        }
    },

    getRecursosByProyectoId: async (req, res) => {
        try {
            const recursos = await recursoProyectoService.getRecursosByProyectoId(req.params.id_proyecto);
            res.json(recursos);
        } catch (error) {
            console.error('Error al obtener los recursos por proyecto:', error);
            res.status(500).send({ message: 'Error al obtener los recursos por proyecto' });
        }
    },

    createRecurso: async (req, res) => {
        try {
            const recurso = await recursoProyectoService.createRecurso(req.body);
            res.status(201).json(recurso);
        } catch (error) {
            console.error('Error al crear el recurso:', error);
            res.status(500).send({ message: 'Error al crear el recurso' });
        }
    },

    updateRecurso: async (req, res) => {
        try {
            const recurso = await recursoProyectoService.updateRecurso(req.params.id, req.body);
            if (recurso) {
                res.json(recurso);
            } else {
                res.status(404).send({ message: 'Recurso no encontrado' });
            }
        } catch (error) {
            console.error('Error al actualizar el recurso:', error);
            res.status(500).send({ message: 'Error al actualizar el recurso' });
        }
    },

    deleteRecurso: async (req, res) => {
        try {
            const result = await recursoProyectoService.deleteRecurso(req.params.id);
            if (result) {
                res.send({ message: 'Recurso eliminado' });
            } else {
                res.status(404).send({ message: 'Recurso no encontrado' });
            }
        } catch (error) {
            console.error('Error al eliminar el recurso:', error);
            res.status(500).send({ message: 'Error al eliminar el recurso' });
        }
    }
};

module.exports = recursoProyectoController;
