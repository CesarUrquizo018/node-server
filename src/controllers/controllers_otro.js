const otroService = require('../services/services_otro');

const otroController = {
    getAllOtros: async (req, res) => {
        try {
            const otros = await otroService.getAllOtros();
            res.json(otros);
        } catch (error) {
            console.error('Error al obtener los registros de Otro:', error);
            res.status(500).send({ message: 'Error al obtener los registros de Otro' });
        }
    },

    getOtroById: async (req, res) => {
        try {
            const otro = await otroService.getOtroById(req.params.id);
            if (otro) {
                res.json(otro);
            } else {
                res.status(404).send({ message: 'Registro de Otro no encontrado' });
            }
        } catch (error) {
            console.error('Error al obtener el registro de Otro:', error);
            res.status(500).send({ message: 'Error al obtener el registro de Otro' });
        }
    },

    createOtro: async (req, res) => {
        try {
            const otro = await otroService.createOtro(req.body);
            res.status(201).json(otro);
        } catch (error) {
            console.error('Error al crear el registro de Otro:', error);
            res.status(500).send({ message: 'Error al crear el registro de Otro' });
        }
    },

    updateOtro: async (req, res) => {
        try {
            const otro = await otroService.updateOtro(req.params.id, req.body);
            if (otro) {
                res.json(otro);
            } else {
                res.status(404).send({ message: 'Registro de Otro no encontrado' });
            }
        } catch (error) {
            console.error('Error al actualizar el registro de Otro:', error);
            res.status(500).send({ message: 'Error al actualizar el registro de Otro' });
        }
    },

    deleteOtro: async (req, res) => {
        try {
            const result = await otroService.deleteOtro(req.params.id);
            if (result) {
                res.send({ message: 'Registro de Otro eliminado' });
            } else {
                res.status(404).send({ message: 'Registro de Otro no encontrado' });
            }
        } catch (error) {
            console.error('Error al eliminar el registro de Otro:', error);
            res.status(500).send({ message: 'Error al eliminar el registro de Otro' });
        }
    },

    getOtrosByProyectoId: async (req, res) => {
        try {
            const otros = await otroService.getOtrosByProyectoId(req.params.id_proyecto);
            res.json(otros);
        } catch (error) {
            console.error('Error al obtener los registros de Otro por proyecto:', error);
            res.status(500).send({ message: 'Error al obtener los registros de Otro por proyecto' });
        }
    }
};

module.exports = otroController;
