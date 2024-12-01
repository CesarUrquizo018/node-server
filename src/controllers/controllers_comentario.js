const comentarioService = require('../services/services_comentario');

const comentarioController = {
    getAllComentarios: async (req, res) => {
        try {
            const comentarios = await comentarioService.getAllComentarios();
            res.json(comentarios);
        } catch (error) {
            console.error('Error al obtener comentarios:', error);
            res.status(500).send({ message: 'Error al obtener comentarios' });
        }
    },

    getComentarioById: async (req, res) => {
        try {
            const comentario = await comentarioService.getComentarioById(req.params.id);
            if (comentario) {
                res.json(comentario);
            } else {
                res.status(404).send({ message: 'Comentario no encontrado' });
            }
        } catch (error) {
            console.error('Error al obtener el comentario:', error);
            res.status(500).send({ message: 'Error al obtener el comentario' });
        }
    },

    createComentario: async (req, res) => {
        try {
            const comentario = await comentarioService.createComentario(req.body);
            res.status(201).json(comentario);
        } catch (error) {
            console.error('Error al crear el comentario:', error);
            res.status(500).send({ message: 'Error al crear el comentario' });
        }
    },

    updateComentario: async (req, res) => {
        try {
            const comentario = await comentarioService.updateComentario(req.params.id, req.body);
            if (comentario) {
                res.json(comentario);
            } else {
                res.status(404).send({ message: 'Comentario no encontrado' });
            }
        } catch (error) {
            console.error('Error al actualizar el comentario:', error);
            res.status(500).send({ message: 'Error al actualizar el comentario' });
        }
    },

    deleteComentario: async (req, res) => {
        try {
            const result = await comentarioService.deleteComentario(req.params.id);
            if (result) {
                res.send({ message: 'Comentario eliminado' });
            } else {
                res.status(404).send({ message: 'Comentario no encontrado' });
            }
        } catch (error) {
            console.error('Error al eliminar el comentario:', error);
            res.status(500).send({ message: 'Error al eliminar el comentario' });
        }
    },

    getComentariosByProyectoId: async (req, res) => {
        const { id_proyecto } = req.params;
        const { page, limit } = req.query;
        try {
          const comentarios = await comentarioService.getComentariosByProyectoId(
            id_proyecto,
            parseInt(page) || 0,
            parseInt(limit) || 10
          );
          res.status(200).json(comentarios);
        } catch (error) {
          console.error('Error al obtener los comentarios:', error);
          res.status(500).send({ message: 'Error al obtener los comentarios' });
        }
      },
      
};

module.exports = comentarioController;
