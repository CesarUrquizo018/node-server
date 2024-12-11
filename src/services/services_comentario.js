const Comentario = require('../models/model_comentario');
const Usuario = require('../models/model_usuario');

const comentarioService = {
    getAllComentarios: async () => {
        try {
            return await Comentario.findAll({
                include: ['Usuario', 'Proyecto']  // Incluye las asociaciones con Usuario y Proyecto
            });
        } catch (error) {
            throw new Error('Error al obtener comentarios');
        }
    },

    getComentarioById: async (id) => {
        try {
            return await Comentario.findByPk(id, {
                include: ['Usuario', 'Proyecto']  // Incluye las asociaciones
            });
        } catch (error) {
            throw new Error('Error al obtener el comentario');
        }
    },

    createComentario: async (data) => {
        try {
            return await Comentario.create(data);
        } catch (error) {
            throw new Error('Error al crear el comentario');
        }
    },

    updateComentario: async (id, data) => {
        try {
            const comentario = await Comentario.findByPk(id);
            if (comentario) {
                return await comentario.update(data);
            }
            return null;
        } catch (error) {
            throw new Error('Error al actualizar el comentario');
        }
    },

    deleteComentario: async (id) => {
        try {
            return await Comentario.destroy({ where: { id_comentario: id } });
        } catch (error) {
            throw new Error('Error al eliminar el comentario');
        }
    },

    getComentariosByProyectoId: async (id_proyecto, page = 0, limit = 10) => {
        try {
          return await Comentario.findAll({
            where: { id_proyecto },
            include: [
              { model: Usuario, attributes: ['nombre'] },
            ],
            limit,
            offset: page * limit,
            order: [['fecha_comentario', 'DESC']],
          });
        } catch (error) {
          throw new Error(`Error al obtener los comentarios por proyecto: ${error.message}`);
        }
      },
      
};

module.exports = comentarioService;
