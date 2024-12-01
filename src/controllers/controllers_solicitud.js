const solicitudService = require('../services/services_solicitud');

const solicitudController = {
    getAllSolicitudes: async (req, res) => {
        try {
            const solicitudes = await solicitudService.getAllSolicitudes();
            res.json(solicitudes);
        } catch (error) {
            console.error('Error al obtener solicitudes:', error);
            res.status(500).send({ message: 'Error al obtener solicitudes' });
        }
    },

    getSolicitudById: async (req, res) => {
        try {
            const solicitud = await solicitudService.getSolicitudById(req.params.id);
            if (solicitud) {
                res.json(solicitud);
            } else {
                res.status(404).send({ message: 'Solicitud no encontrada' });
            }
        } catch (error) {
            console.error('Error al obtener la solicitud:', error);
            res.status(500).send({ message: 'Error al obtener la solicitud' });
        }
    },

    createSolicitud: async (req, res) => {
        try {
            const solicitud = await solicitudService.createSolicitud(req.body);
            res.status(201).json(solicitud);
        } catch (error) {
            console.error('Error al crear la solicitud:', error);
            res.status(500).send({ message: 'Error al crear la solicitud' });
        }
    },

    updateSolicitud: async (req, res) => {
        try {
            const solicitud = await solicitudService.updateSolicitud(req.params.id, req.body);
            if (solicitud) {
                res.json(solicitud);
            } else {
                res.status(404).send({ message: 'Solicitud no encontrada' });
            }
        } catch (error) {
            console.error('Error al actualizar la solicitud:', error);
            res.status(500).send({ message: 'Error al actualizar la solicitud' });
        }
    },

    deleteSolicitud: async (req, res) => {
        try {
            const result = await solicitudService.deleteSolicitud(req.params.id);
            if (result) {
                res.send({ message: 'Solicitud eliminada' });
            } else {
                res.status(404).send({ message: 'Solicitud no encontrada' });
            }
        } catch (error) {
            console.error('Error al eliminar la solicitud:', error);
            res.status(500).send({ message: 'Error al eliminar la solicitud' });
        }
    },

    getSolicitudesByProyectoId: async (req, res) => {
        try {
            const solicitudes = await solicitudService.getSolicitudesByProyectoId(req.params.id_proyecto);
            res.json(solicitudes);
        } catch (error) {
            console.error('Error al obtener las solicitudes:', error);
            res.status(500).send({ message: 'Error al obtener las solicitudes' });
        }
    },

    acceptSolicitud: async (req, res) => {
        try {
            const solicitud = await solicitudService.acceptSolicitud(req.params.id);
            if (solicitud) {
                res.json({ message: 'Solicitud aceptada' });
            } else {
                res.status(404).send({ message: 'Solicitud no encontrada' });
            }
        } catch (error) {
            console.error('Error al aceptar la solicitud:', error);
            res.status(500).send({ message: 'Error al aceptar la solicitud' });
        }
    },

    rejectSolicitud: async (req, res) => {
        try {
            const solicitud = await solicitudService.rejectSolicitud(req.params.id);
            if (solicitud) {
                res.json({ message: 'Solicitud rechazada' });
            } else {
                res.status(404).send({ message: 'Solicitud no encontrada' });
            }
        } catch (error) {
            console.error('Error al rechazar la solicitud:', error);
            res.status(500).send({ message: 'Error al rechazar la solicitud' });
        }
    },

    obtenerSolicitudesRecibidas: async (req, res) => {
        try {
            const solicitudes = await solicitudService.obtenerSolicitudesRecibidas(req.user.id_usuario);
            res.json(solicitudes);
        } catch (error) {
            console.error('Error al obtener solicitudes recibidas:', error);
            res.status(500).send({ message: 'Error al obtener solicitudes recibidas' });
        }
    },

    obtenerSolicitudesEnviadas: async (req, res) => {
        try {
            const solicitudes = await solicitudService.obtenerSolicitudesEnviadas(req.user.id_usuario);
            res.json(solicitudes);
        } catch (error) {
            console.error('Error al obtener solicitudes enviadas:', error);
            res.status(500).send({ message: 'Error al obtener solicitudes enviadas' });
        }
    }
};

module.exports = solicitudController;

