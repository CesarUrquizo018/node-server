const usuarioFacultadUniversidadService = require('../services/services_usuario_facultad_universidad');

const usuarioFacultadUniversidadController = {
    getAllUsuarioFacultadUniversidad: async (req, res) => {
        try {
            const relaciones = await usuarioFacultadUniversidadService.getAllUsuarioFacultadUniversidad();
            res.json(relaciones);
        } catch (error) {
            console.error('Error al obtener relaciones:', error);
            res.status(500).send({ message: 'Error al obtener relaciones' });
        }
    },

    createUsuarioFacultadUniversidad: async (req, res) => {
        try {
            const nuevaRelacion = await usuarioFacultadUniversidadService.createUsuarioFacultadUniversidad(req.body);
            res.status(201).json(nuevaRelacion);
        } catch (error) {
            console.error('Error al crear relación:', error);
            res.status(500).send({ message: 'Error al crear relación' });
        }
    },

    deleteUsuarioFacultadUniversidad: async (req, res) => {
        try {
            const { id_usuario, id_facultad, id_universidad } = req.params;
            const result = await usuarioFacultadUniversidadService.deleteUsuarioFacultadUniversidad(id_usuario, id_facultad, id_universidad);
            if (result) {
                res.send({ message: 'Relación eliminada' });
            } else {
                res.status(404).send({ message: 'Relación no encontrada' });
            }
        } catch (error) {
            console.error('Error al eliminar relación:', error);
            res.status(500).send({ message: 'Error al eliminar relación' });
        }
    }
};

module.exports = usuarioFacultadUniversidadController;
