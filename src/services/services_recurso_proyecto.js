const RecursoProyecto = require('../models/model_recurso_proyecto');

const recursoProyectoService = {
    getAllRecursos: async () => {
        try {
            return await RecursoProyecto.findAll({
                include: ['Proyecto']  // Incluye la asociación con Proyecto
            });
        } catch (error) {
            throw new Error('Error al obtener los recursos');
        }
    },

    getRecursoById: async (id) => {
        try {
            return await RecursoProyecto.findByPk(id, {
                include: ['Proyecto']  // Incluye la asociación con Proyecto
            });
        } catch (error) {
            throw new Error('Error al obtener el recurso');
        }
    },

    getRecursosByProyectoId: async (id_proyecto) => {
        try {
            return await RecursoProyecto.findAll({
                where: { id_proyecto }
            });
        } catch (error) {
            throw new Error('Error al obtener los recursos por proyecto');
        }
    },

    createRecurso: async (data) => {
        try {
            return await RecursoProyecto.create(data);
        } catch (error) {
            throw new Error('Error al crear el recurso');
        }
    },

    updateRecurso: async (id, data) => {
        try {
            const recurso = await RecursoProyecto.findByPk(id);
            if (recurso) {
                return await recurso.update(data);
            }
            return null;
        } catch (error) {
            throw new Error('Error al actualizar el recurso');
        }
    },

    deleteRecurso: async (id) => {
        try {
            return await RecursoProyecto.destroy({ where: { id_recurso: id } });
        } catch (error) {
            throw new Error('Error al eliminar el recurso');
        }
    }
};

module.exports = recursoProyectoService;
