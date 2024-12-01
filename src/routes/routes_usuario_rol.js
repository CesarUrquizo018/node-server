const express = require('express');
const router = express.Router();
const usuarioRolController = require('../controllers/controllers_usuario_rol');

router.get('/', usuarioRolController.getAllUsuarioRoles);
router.post('/', usuarioRolController.createUsuarioRol);
router.delete('/:id_usuario/:id_rol', usuarioRolController.deleteUsuarioRol);

module.exports = router;
