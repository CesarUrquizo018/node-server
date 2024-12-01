const temaService = require('../services/services_tema');

const temaController = {
    getAllTemas: async (req, res) => {
        try {
            const temas = await temaService.getAllTemas();
            res.json(temas);
        } catch (error) {
            console.error('Error al obtener temas:', error);
            res.status(500).send({ message: 'Error al obtener temas' });
        }
    },

    getTemaById: async (req, res) => {
        try {
            const tema = await temaService.getTemaById(req.params.id);
            if (tema) {
                res.json(tema);
            } else {
                res.status(404).send({ message: 'Tema no encontrado' });
            }
        } catch (error) {
            console.error('Error al obtener el tema:', error);
            res.status(500).send({ message: 'Error al obtener el tema' });
        }
    },

    createTema: async (req, res) => {
        try {
            const tema = await temaService.createTema(req.body);
            res.status(201).json(tema);
        } catch (error) {
            console.error('Error al crear el tema:', error);
            res.status(500).send({ message: 'Error al crear el tema' });
        }
    },

    updateTema: async (req, res) => {
        try {
            const tema = await temaService.updateTema(req.params.id, req.body);
            if (tema) {
                res.json(tema);
            } else {
                res.status(404).send({ message: 'Tema no encontrado' });
            }
        } catch (error) {
            console.error('Error al actualizar el tema:', error);
            res.status(500).send({ message: 'Error al actualizar el tema' });
        }
    },

    deleteTema: async (req, res) => {
        try {
            const resultado = await temaService.deleteTema(req.params.id);
            if (resultado) {
                res.send({ message: 'Tema eliminado' });
            } else {
                res.status(404).send({ message: 'Tema no encontrado' });
            }
        } catch (error) {
            console.error('Error al eliminar el tema:', error);
            res.status(500).send({ message: 'Error al eliminar el tema' });
        }
    }
};

module.exports = temaController;
