const miembrosProyectoService = require('../services/services_miembros_proyecto');

const miembrosProyectoController = {
    getAllMiembrosProyecto: async (req, res) => {
        try {
            const miembros = await miembrosProyectoService.getAllMiembrosProyecto();
            res.json(miembros);
        } catch (error) {
            console.error('Error al obtener los miembros del proyecto:', error);
            res.status(500).send({ message: 'Error al obtener los miembros del proyecto' });
        }
    },

    getMiembrosByProyectoId: async (req, res) => {
        try {
            const miembros = await miembrosProyectoService.getMiembrosByProyectoId(req.params.id_proyecto);
            res.json(miembros);
        } catch (error) {
            console.error('Error al obtener los miembros por proyecto:', error);
            res.status(500).send({ message: 'Error al obtener los miembros por proyecto' });
        }
    },

    getMiembrosProyectoById: async (req, res) => {
        try {
            const { id_usuario, id_proyecto } = req.params;
            const miembro = await miembrosProyectoService.getMiembrosProyectoById(id_usuario, id_proyecto);
            if (miembro) {
                res.json(miembro);
            } else {
                res.status(404).send({ message: 'Miembro del proyecto no encontrado' });
            }
        } catch (error) {
            console.error('Error al obtener el miembro del proyecto:', error);
            res.status(500).send({ message: 'Error al obtener el miembro del proyecto' });
        }
    },

    createMiembroProyecto: async (req, res) => {
        try {
            const miembro = await miembrosProyectoService.createMiembroProyecto(req.body);
            res.status(201).json(miembro);
        } catch (error) {
            console.error('Error al crear el miembro del proyecto:', error);
            res.status(500).send({ message: 'Error al crear el miembro del proyecto' });
        }
    },

    deleteMiembroProyecto: async (req, res) => {
        try {
            const { id_usuario, id_proyecto } = req.params;
            const result = await miembrosProyectoService.deleteMiembroProyecto(id_usuario, id_proyecto);
            if (result) {
                res.send({ message: 'Miembro del proyecto eliminado' });
            } else {
                res.status(404).send({ message: 'Miembro del proyecto no encontrado' });
            }
        } catch (error) {
            console.error('Error al eliminar el miembro del proyecto:', error);
            res.status(500).send({ message: 'Error al eliminar el miembro del proyecto' });
        }
    }
};

module.exports = miembrosProyectoController;
