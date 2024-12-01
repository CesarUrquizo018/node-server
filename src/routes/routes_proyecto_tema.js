const express = require('express');
const router = express.Router();
const proyectoTemaController = require('../controllers/controllers_proyecto_tema');

router.get('/', proyectoTemaController.getAllProyectoTemas);
router.get('/:id_proyecto/:id_tema', proyectoTemaController.getProyectoTemaById);
router.post('/', proyectoTemaController.createProyectoTema);
router.delete('/:id_proyecto/:id_tema', proyectoTemaController.deleteProyectoTema);

module.exports = router;
