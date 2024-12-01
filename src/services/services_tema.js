const Tema = require('../models/model_tema');

const temaService = {
    getAllTemas: async () => {
        try {
            return await Tema.findAll();
        } catch (error) {
            throw new Error('Error al obtener temas');
        }
    },

    getTemaById: async (id) => {
        try {
            return await Tema.findByPk(id);
        } catch (error) {
            throw new Error('Error al obtener el tema');
        }
    },

    createTema: async (data) => {
        try {
            return await Tema.create(data);
        } catch (error) {
            throw new Error('Error al crear el tema');
        }
    },

    updateTema: async (id, data) => {
        try {
            const tema = await Tema.findByPk(id);
            if (tema) {
                return await tema.update(data);
            }
            throw new Error('Tema no encontrado');
        } catch (error) {
            throw new Error('Error al actualizar el tema');
        }
    },

    deleteTema: async (id) => {
        try {
            return await Tema.destroy({ where: { id_tema: id } });
        } catch (error) {
            throw new Error('Error al eliminar el tema');
        }
    }
};

module.exports = temaService;
