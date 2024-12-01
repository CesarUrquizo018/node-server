const proyectoService = require('../services/services_proyecto');

const proyectoController = {
    getAllProyectos: async (req, res) => {
        try {
            const proyectos = await proyectoService.getAllProyectos();
            res.json(proyectos);
        } catch (error) {
            console.error('Error al obtener los proyectos:', error);
            res.status(500).send({ message: 'Error al obtener los proyectos' });
        }
    },

    getProyectoById: async (req, res) => {
        try {
            const proyecto = await proyectoService.getProyectoById(req.params.id);
            if (proyecto) {
                res.json(proyecto);
            } else {
                res.status(404).send({ message: 'Proyecto no encontrado' });
            }
        } catch (error) {
            console.error('Error al obtener el proyecto:', error);
            res.status(500).send({ message: 'Error al obtener el proyecto' });
        }
    },

    getProyectosByUsuario: async (req, res) => {
        try {
            const proyectos = await proyectoService.getProyectosByUsuario(req.params.usuarioId);
            res.json(proyectos);
        } catch (error) {
            console.error('Error al obtener los proyectos del usuario:', error);
            res.status(500).send({ message: 'Error al obtener los proyectos del usuario' });
        }
    },

    createProyecto: async (req, res) => {
        try {
            const proyecto = await proyectoService.createProyecto(req.body);
            res.status(201).json(proyecto);
        } catch (error) {
            console.error('Error al crear el proyecto:', error);
            res.status(500).send({ message: 'Error al crear el proyecto' });
        }
    },

    updateProyecto: async (req, res) => {
        try {
            const proyecto = await proyectoService.updateProyecto(req.params.id, req.body);
            if (proyecto) {
                res.json(proyecto);
            } else {
                res.status(404).send({ message: 'Proyecto no encontrado' });
            }
        } catch (error) {
            console.error('Error al actualizar el proyecto:', error);
            res.status(500).send({ message: 'Error al actualizar el proyecto' });
        }
    },

    deleteProyecto: async (req, res) => {
        try {
            const result = await proyectoService.deleteProyecto(req.params.id);
            if (result) {
                res.send({ message: 'Proyecto eliminado' });
            } else {
                res.status(404).send({ message: 'Proyecto no encontrado' });
            }
        } catch (error) {
            console.error('Error al eliminar el proyecto:', error);
            res.status(500).send({ message: 'Error al eliminar el proyecto' });
        }
    }
};

module.exports = proyectoController;
