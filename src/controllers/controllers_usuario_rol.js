const usuarioRolService = require('../services/services_usuario_rol');

const usuarioRolController = {
    getAllUsuarioRoles: async (req, res) => {
        try {
            const usuarioRoles = await usuarioRolService.getAllUsuarioRoles();
            res.json(usuarioRoles);
        } catch (error) {
            console.error('Error al obtener usuario-rol:', error);
            res.status(500).send({ message: 'Error al obtener usuario-rol' });
        }
    },

    createUsuarioRol: async (req, res) => {
        try {
            const usuarioRol = await usuarioRolService.createUsuarioRol(req.body);
            res.status(201).json(usuarioRol);
        } catch (error) {
            console.error('Error al crear usuario-rol:', error);
            res.status(500).send({ message: 'Error al crear usuario-rol' });
        }
    },

    deleteUsuarioRol: async (req, res) => {
        try {
            const { id_usuario, id_rol } = req.params;
            const result = await usuarioRolService.deleteUsuarioRol(id_usuario, id_rol);
            if (result) {
                res.send({ message: 'Relación usuario-rol eliminada' });
            } else {
                res.status(404).send({ message: 'Relación no encontrada' });
            }
        } catch (error) {
            console.error('Error al eliminar usuario-rol:', error);
            res.status(500).send({ message: 'Error al eliminar usuario-rol' });
        }
    }
};

module.exports = usuarioRolController;
