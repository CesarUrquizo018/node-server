const universidadService = require('../services/services_universidad');

const universidadController = {
    getAllUniversidades: async (req, res) => {
        try {
            const universidades = await universidadService.getAllUniversidades();
            res.json(universidades);
        } catch (error) {
            console.error('Error al obtener universidades:', error);
            res.status(500).send({ message: 'Error al obtener universidades' });
        }
    },

    getUniversidadById: async (req, res) => {
        try {
            const universidad = await universidadService.getUniversidadById(req.params.id);
            if (universidad) {
                res.json(universidad);
            } else {
                res.status(404).send({ message: 'Universidad no encontrada' });
            }
        } catch (error) {
            console.error('Error al obtener la universidad:', error);
            res.status(500).send({ message: 'Error al obtener la universidad' });
        }
    },

    createUniversidad: async (req, res) => {
        try {
            const universidad = await universidadService.createUniversidad(req.body);
            res.status(201).json(universidad);
        } catch (error) {
            console.error('Error al crear la universidad:', error);
            res.status(500).send({ message: 'Error al crear la universidad' });
        }
    },

    updateUniversidad: async (req, res) => {
        try {
            const universidad = await universidadService.updateUniversidad(req.params.id, req.body);
            if (universidad) {
                res.json(universidad);
            } else {
                res.status(404).send({ message: 'Universidad no encontrada' });
            }
        } catch (error) {
            console.error('Error al actualizar la universidad:', error);
            res.status(500).send({ message: 'Error al actualizar la universidad' });
        }
    },

    deleteUniversidad: async (req, res) => {
        try {
            const result = await universidadService.deleteUniversidad(req.params.id);
            if (result) {
                res.send({ message: 'Universidad eliminada' });
            } else {
                res.status(404).send({ message: 'Universidad no encontrada' });
            }
        } catch (error) {
            console.error('Error al eliminar la universidad:', error);
            res.status(500).send({ message: 'Error al eliminar la universidad' });
        }
    }
};

module.exports = universidadController;
