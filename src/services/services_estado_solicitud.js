const EstadoSolicitud = require('../models/model_estado_solicitud');

const estadoSolicitudService = {
    getAllEstados: async () => {
        try {
            return await EstadoSolicitud.findAll();
        } catch (error) {
            throw new Error('Error al obtener estados');
        }
    },

    getEstadoById: async (id) => {
        try {
            return await EstadoSolicitud.findByPk(id);
        } catch (error) {
            throw new Error('Error al obtener el estado');
        }
    },

    createEstado: async (data) => {
        try {
            return await EstadoSolicitud.create(data);
        } catch (error) {
            throw new Error('Error al crear el estado');
        }
    },

    updateEstado: async (id, data) => {
        try {
            const estado = await EstadoSolicitud.findByPk(id);
            if (estado) {
                return await estado.update(data);
            }
            return null;
        } catch (error) {
            throw new Error('Error al actualizar el estado');
        }
    },

    deleteEstado: async (id) => {
        try {
            return await EstadoSolicitud.destroy({ where: { id_estado: id } });
        } catch (error) {
            throw new Error('Error al eliminar el estado');
        }
    }
};

module.exports = estadoSolicitudService;
