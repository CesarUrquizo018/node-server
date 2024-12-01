const UsuarioFacultadUniversidad = require('../models/model_usuario_facultad_universidad');

const usuarioFacultadUniversidadService = {
    getAllUsuarioFacultadUniversidad: async () => {
        try {
            return await UsuarioFacultadUniversidad.findAll();
        } catch (error) {
            throw new Error('Error al obtener usuario-facultad-universidad');
        }
    },

    createUsuarioFacultadUniversidad: async (data) => {
        try {
            return await UsuarioFacultadUniversidad.create(data);
        } catch (error) {
            throw new Error('Error al crear usuario-facultad-universidad');
        }
    },

    deleteUsuarioFacultadUniversidad: async (id_usuario, id_facultad, id_universidad) => {
        try {
            return await UsuarioFacultadUniversidad.destroy({
                where: { id_usuario, id_facultad, id_universidad }
            });
        } catch (error) {
            throw new Error('Error al eliminar usuario-facultad-universidad');
        }
    }
};

module.exports = usuarioFacultadUniversidadService;
