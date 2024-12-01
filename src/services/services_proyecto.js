const Proyecto = require('../models/model_proyecto');

const proyectoService = {
    getAllProyectos: async () => {
        try {
            return await Proyecto.findAll({
                include: ['creador']  // Incluye la asociación con Usuario como 'creador'
            });
        } catch (error) {
            throw new Error('Error al obtener los proyectos');
        }
    },

    getProyectoById: async (id) => {
        try {
            return await Proyecto.findByPk(id, {
                include: ['creador']  // Incluye la asociación con Usuario como 'creador'
            });
        } catch (error) {
            throw new Error('Error al obtener el proyecto');
        }
    },

    getProyectosByUsuario: async (usuarioId) => {
        try {
            return await Proyecto.findAll({
                where: { id_usuario: usuarioId },
                include: ['creador']  // Incluye la asociación con Usuario como 'creador'
            });
        } catch (error) {
            throw new Error('Error al obtener los proyectos del usuario');
        }
    },

    createProyecto: async (data) => {
        try {
            return await Proyecto.create(data);
        } catch (error) {
            throw new Error('Error al crear el proyecto');
        }
    },

    updateProyecto: async (id, data) => {
        try {
            const proyecto = await Proyecto.findByPk(id);
            if (proyecto) {
                return await proyecto.update(data);
            }
            return null;
        } catch (error) {
            throw new Error('Error al actualizar el proyecto');
        }
    },

    deleteProyecto: async (id) => {
        try {
            return await Proyecto.destroy({ where: { id_proyecto: id } });
        } catch (error) {
            throw new Error('Error al eliminar el proyecto');
        }
    }
};

module.exports = proyectoService;
