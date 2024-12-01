const express = require('express');
const router = express.Router();
const usuarioFacultadUniversidadController = require('../controllers/controllers_usuario_facultad_universidad');

router.get('/', usuarioFacultadUniversidadController.getAllUsuarioFacultadUniversidad);
router.post('/', usuarioFacultadUniversidadController.createUsuarioFacultadUniversidad);
router.delete('/:id_usuario/:id_facultad/:id_universidad', usuarioFacultadUniversidadController.deleteUsuarioFacultadUniversidad);

module.exports = router;
