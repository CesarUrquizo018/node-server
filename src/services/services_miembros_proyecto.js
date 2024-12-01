const MiembrosProyecto = require('../models/model_miembros_proyecto');

const miembrosProyectoService = {
    getAllMiembrosProyecto: async () => {
        try {
            return await MiembrosProyecto.findAll({
                include: ['usuario', 'proyecto']  // Incluye asociaciones con Usuario y Proyecto
            });
        } catch (error) {
            throw new Error('Error al obtener los miembros del proyecto');
        }
    },

    getMiembrosByProyectoId: async (id_proyecto) => {
        try {
            return await MiembrosProyecto.findAll({
                where: { id_proyecto },
                include: ['usuario']  // Incluye asociación con Usuario
            });
        } catch (error) {
            throw new Error('Error al obtener los miembros por proyecto');
        }
    },

    getMiembrosProyectoById: async (id_usuario, id_proyecto) => {
        try {
            return await MiembrosProyecto.findOne({
                where: { id_usuario, id_proyecto },
                include: ['usuario', 'proyecto']  // Incluye asociaciones
            });
        } catch (error) {
            throw new Error('Error al obtener el miembro del proyecto');
        }
    },

    createMiembroProyecto: async (data) => {
        try {
            return await MiembrosProyecto.create(data);
        } catch (error) {
            throw new Error('Error al crear el miembro del proyecto');
        }
    },

    deleteMiembroProyecto: async (id_usuario, id_proyecto) => {
        try {
            return await MiembrosProyecto.destroy({
                where: { id_usuario, id_proyecto }
            });
        } catch (error) {
            throw new Error('Error al eliminar el miembro del proyecto');
        }
    }
};

module.exports = miembrosProyectoService;
