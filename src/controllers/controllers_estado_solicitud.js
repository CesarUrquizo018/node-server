const estadoSolicitudService = require('../services/services_estado_solicitud');

const estadoSolicitudController = {
    getAllEstados: async (req, res) => {
        try {
            const estados = await estadoSolicitudService.getAllEstados();
            res.json(estados);
        } catch (error) {
            console.error('Error al obtener estados:', error);
            res.status(500).send({ message: 'Error al obtener estados' });
        }
    },

    getEstadoById: async (req, res) => {
        try {
            const estado = await estadoSolicitudService.getEstadoById(req.params.id);
            if (estado) {
                res.json(estado);
            } else {
                res.status(404).send({ message: 'Estado no encontrado' });
            }
        } catch (error) {
            console.error('Error al obtener el estado:', error);
            res.status(500).send({ message: 'Error al obtener el estado' });
        }
    },

    createEstado: async (req, res) => {
        try {
            const estado = await estadoSolicitudService.createEstado(req.body);
            res.status(201).json(estado);
        } catch (error) {
            console.error('Error al crear el estado:', error);
            res.status(500).send({ message: 'Error al crear el estado' });
        }
    },

    updateEstado: async (req, res) => {
        try {
            const estado = await estadoSolicitudService.updateEstado(req.params.id, req.body);
            if (estado) {
                res.json(estado);
            } else {
                res.status(404).send({ message: 'Estado no encontrado' });
            }
        } catch (error) {
            console.error('Error al actualizar el estado:', error);
            res.status(500).send({ message: 'Error al actualizar el estado' });
        }
    },

    deleteEstado: async (req, res) => {
        try {
            const result = await estadoSolicitudService.deleteEstado(req.params.id);
            if (result) {
                res.send({ message: 'Estado eliminado' });
            } else {
                res.status(404).send({ message: 'Estado no encontrado' });
            }
        } catch (error) {
            console.error('Error al eliminar el estado:', error);
            res.status(500).send({ message: 'Error al eliminar el estado' });
        }
    }
};

module.exports = estadoSolicitudController;
