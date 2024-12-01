const facultadService = require('../services/services_facultad');

const facultadController = {
    getAllFacultades: async (req, res) => {
        try {
            const facultades = await facultadService.getAllFacultades();
            res.json(facultades);
        } catch (error) {
            console.error('Error al obtener facultades:', error);
            res.status(500).send({ message: 'Error al obtener facultades' });
        }
    },

    getFacultadById: async (req, res) => {
        try {
            const facultad = await facultadService.getFacultadById(req.params.id);
            if (facultad) {
                res.json(facultad);
            } else {
                res.status(404).send({ message: 'Facultad no encontrada' });
            }
        } catch (error) {
            console.error('Error al obtener la facultad:', error);
            res.status(500).send({ message: 'Error al obtener la facultad' });
        }
    },

    createFacultad: async (req, res) => {
        try {
            const facultad = await facultadService.createFacultad(req.body);
            res.status(201).json(facultad);
        } catch (error) {
            console.error('Error al crear la facultad:', error);
            res.status(500).send({ message: 'Error al crear la facultad' });
        }
    },

    updateFacultad: async (req, res) => {
        try {
            const facultad = await facultadService.updateFacultad(req.params.id, req.body);
            if (facultad) {
                res.json(facultad);
            } else {
                res.status(404).send({ message: 'Facultad no encontrada' });
            }
        } catch (error) {
            console.error('Error al actualizar la facultad:', error);
            res.status(500).send({ message: 'Error al actualizar la facultad' });
        }
    },

    deleteFacultad: async (req, res) => {
        try {
            const result = await facultadService.deleteFacultad(req.params.id);
            if (result) {
                res.send({ message: 'Facultad eliminada' });
            } else {
                res.status(404).send({ message: 'Facultad no encontrada' });
            }
        } catch (error) {
            console.error('Error al eliminar la facultad:', error);
            res.status(500).send({ message: 'Error al eliminar la facultad' });
        }
    }
};

module.exports = facultadController;
