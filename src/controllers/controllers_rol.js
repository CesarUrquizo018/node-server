const rolService = require('../services/services_rol');

const rolController = {
    getAllRoles: async (req, res) => {
        try {
            const roles = await rolService.getAllRoles();
            res.json(roles);
        } catch (error) {
            console.error('Error al obtener los roles:', error);
            res.status(500).send({ message: 'Error al obtener los roles' });
        }
    },

    getRolById: async (req, res) => {
        try {
            const rol = await rolService.getRolById(req.params.id);
            if (rol) {
                res.json(rol);
            } else {
                res.status(404).send({ message: 'Rol no encontrado' });
            }
        } catch (error) {
            console.error('Error al obtener el rol:', error);
            res.status(500).send({ message: 'Error al obtener el rol' });
        }
    },

    createRol: async (req, res) => {
        try {
            const rol = await rolService.createRol(req.body);
            res.status(201).json(rol);
        } catch (error) {
            console.error('Error al crear el rol:', error);
            res.status(500).send({ message: 'Error al crear el rol' });
        }
    },

    updateRol: async (req, res) => {
        try {
            const rol = await rolService.updateRol(req.params.id, req.body);
            if (rol) {
                res.json(rol);
            } else {
                res.status(404).send({ message: 'Rol no encontrado' });
            }
        } catch (error) {
            console.error('Error al actualizar el rol:', error);
            res.status(500).send({ message: 'Error al actualizar el rol' });
        }
    },

    deleteRol: async (req, res) => {
        try {
            const result = await rolService.deleteRol(req.params.id);
            if (result) {
                res.send({ message: 'Rol eliminado' });
            } else {
                res.status(404).send({ message: 'Rol no encontrado' });
            }
        } catch (error) {
            console.error('Error al eliminar el rol:', error);
            res.status(500).send({ message: 'Error al eliminar el rol' });
        }
    }
};

module.exports = rolController;
