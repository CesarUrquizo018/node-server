const Solicitud = require('../models/model_solicitud');
const Proyecto = require('../models/model_proyecto');
const Usuario = require('../models/model_usuario');
const MiembrosProyecto = require('../models/model_miembros_proyecto');

const solicitudService = {
    getAllSolicitudes: async () => {
        try {
            return await Solicitud.findAll({
                include: [
                    {
                        model: Proyecto,
                        as: 'proyecto',
                        attributes: ['titulo'],
                        include: [{ model: Usuario, as: 'creador', attributes: ['nombre'] }]
                    },
                    { model: Usuario, as: 'remitente', attributes: ['nombre'] },
                    { model: Usuario, as: 'receptor', attributes: ['nombre'] }
                ]
            });
        } catch (error) {
            throw new Error('Error al obtener solicitudes');
        }
    },

    getSolicitudById: async (id) => {
        try {
            return await Solicitud.findByPk(id, {
                include: [
                    {
                        model: Proyecto,
                        as: 'proyecto',
                        attributes: ['titulo'],
                        include: [{ model: Usuario, as: 'creador', attributes: ['nombre'] }]
                    },
                    { model: Usuario, as: 'remitente', attributes: ['nombre'] },
                    { model: Usuario, as: 'receptor', attributes: ['nombre'] }
                ]
            });
        } catch (error) {
            throw new Error('Error al obtener la solicitud');
        }
    },

    createSolicitud: async (data) => {
        try {
            const proyecto = await Proyecto.findByPk(data.id_proyecto);
            if (!proyecto) {
                throw new Error('Proyecto no encontrado');
            }

            return await Solicitud.create({
                id_remitente: data.id_remitente,
                id_receptor: proyecto.id_usuario,
                id_proyecto: data.id_proyecto,
                id_estado: 1, // Estado por defecto al crear
                fecha_solicitud: new Date().toISOString().slice(0, 10),
                mensaje: data.mensaje
            });
        } catch (error) {
            throw new Error('Error al crear la solicitud');
        }
    },

    updateSolicitud: async (id, data) => {
        try {
            const solicitud = await Solicitud.findByPk(id);
            if (solicitud) {
                await solicitud.update(data);

                if (data.id_estado === 2) {
                    await MiembrosProyecto.create({ id_usuario: solicitud.id_remitente, id_proyecto: solicitud.id_proyecto });
                }

                return solicitud;
            }
            return null;
        } catch (error) {
            throw new Error('Error al actualizar la solicitud');
        }
    },

    deleteSolicitud: async (id) => {
        try {
            return await Solicitud.destroy({ where: { id_solicitud: id } });
        } catch (error) {
            throw new Error('Error al eliminar la solicitud');
        }
    },

    getSolicitudesByProyectoId: async (id_proyecto) => {
        try {
            return await Solicitud.findAll({
                where: { id_proyecto },
                include: [
                    {
                        model: Proyecto,
                        as: 'proyecto',
                        attributes: ['titulo'],
                        include: [{ model: Usuario, as: 'creador', attributes: ['nombre'] }]
                    },
                    { model: Usuario, as: 'remitente', attributes: ['nombre'] },
                    { model: Usuario, as: 'receptor', attributes: ['nombre'] }
                ]
            });
        } catch (error) {
            throw new Error('Error al obtener solicitudes por proyecto');
        }
    },

    acceptSolicitud: async (id) => {
        try {
            const solicitud = await Solicitud.findByPk(id);
            if (solicitud) {
                await solicitud.update({ id_estado: 2 });
                await MiembrosProyecto.create({
                    id_usuario: solicitud.id_remitente,
                    id_proyecto: solicitud.id_proyecto,
                });
                return solicitud;
            }
            return null;
        } catch (error) {
            throw new Error('Error al aceptar la solicitud');
        }
    },

    rejectSolicitud: async (id) => {
        try {
            const solicitud = await Solicitud.findByPk(id);
            if (solicitud) {
                await solicitud.update({ id_estado: 3 });
                return solicitud;
            }
            return null;
        } catch (error) {
            throw new Error('Error al rechazar la solicitud');
        }
    },

    obtenerSolicitudesRecibidas: async (id_usuario) => {
        try {
            return await Solicitud.findAll({
                where: { id_receptor: id_usuario },
                include: [
                    {
                        model: Proyecto,
                        as: 'proyecto',
                        attributes: ['titulo'],
                        include: [{ model: Usuario, as: 'creador', attributes: ['nombre'] }]
                    },
                    { model: Usuario, as: 'remitente', attributes: ['nombre'] },
                    { model: Usuario, as: 'receptor', attributes: ['nombre'] }
                ]
            });
        } catch (error) {
            throw new Error('Error al obtener solicitudes recibidas');
        }
    },

    obtenerSolicitudesEnviadas: async (id_usuario) => {
        try {
            return await Solicitud.findAll({
                where: { id_remitente: id_usuario },
                include: [
                    {
                        model: Proyecto,
                        as: 'proyecto',
                        attributes: ['titulo'],
                        include: [{ model: Usuario, as: 'creador', attributes: ['nombre'] }]
                    },
                    { model: Usuario, as: 'remitente', attributes: ['nombre'] },
                    { model: Usuario, as: 'receptor', attributes: ['nombre'] }
                ]
            });
        } catch (error) {
            throw new Error('Error al obtener solicitudes enviadas');
        }
    }
};

module.exports = solicitudService;
