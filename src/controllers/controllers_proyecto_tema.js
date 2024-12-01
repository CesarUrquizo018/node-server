const proyectoTemaService = require('../services/services_proyecto_tema');

const proyectoTemaController = {
    getAllProyectoTemas: async (req, res) => {
        try {
            const relaciones = await proyectoTemaService.getAllProyectoTemas();
            res.json(relaciones);
        } catch (error) {
            console.error('Error al obtener relaciones proyecto-tema:', error);
            res.status(500).send({ message: 'Error al obtener relaciones proyecto-tema' });
        }
    },

    getProyectoTemaById: async (req, res) => {
        try {
            const { id_proyecto, id_tema } = req.params;
            const relacion = await proyectoTemaService.getProyectoTemaById(id_proyecto, id_tema);
            if (relacion) {
                res.json(relacion);
            } else {
                res.status(404).send({ message: 'Relación no encontrada' });
            }
        } catch (error) {
            console.error('Error al obtener la relación:', error);
            res.status(500).send({ message: 'Error al obtener la relación proyecto-tema' });
        }
    },

    createProyectoTema: async (req, res) => {
        try {
            const nuevaRelacion = await proyectoTemaService.createProyectoTema(req.body);
            res.status(201).json(nuevaRelacion);
        } catch (error) {
            console.error('Error al crear la relación:', error);
            res.status(500).send({ message: 'Error al crear la relación proyecto-tema' });
        }
    },

    deleteProyectoTema: async (req, res) => {
        try {
            const { id_proyecto, id_tema } = req.params;
            const resultado = await proyectoTemaService.deleteProyectoTema(id_proyecto, id_tema);
            if (resultado) {
                res.send({ message: 'Relación eliminada' });
            } else {
                res.status(404).send({ message: 'Relación no encontrada' });
            }
        } catch (error) {
            console.error('Error al eliminar la relación:', error);
            res.status(500).send({ message: 'Error al eliminar la relación proyecto-tema' });
        }
    }
};

module.exports = proyectoTemaController;
