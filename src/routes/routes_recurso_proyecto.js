const express = require('express');
const router = express.Router();
const recursoProyectoController = require('../controllers/controllers_recurso_proyecto');

router.get('/', recursoProyectoController.getAllRecursos);
router.get('/:id', recursoProyectoController.getRecursoById);
router.get('/proyecto/:id_proyecto', recursoProyectoController.getRecursosByProyectoId);
router.post('/', recursoProyectoController.createRecurso);
router.put('/:id', recursoProyectoController.updateRecurso);
router.delete('/:id', recursoProyectoController.deleteRecurso);

module.exports = router;
