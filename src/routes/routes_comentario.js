const express = require('express');
const router = express.Router();
const comentarioController = require('../controllers/controllers_comentario');

router.get('/', comentarioController.getAllComentarios);
router.get('/:id', comentarioController.getComentarioById);
router.post('/', comentarioController.createComentario);
router.put('/:id', comentarioController.updateComentario);
router.delete('/:id', comentarioController.deleteComentario);
router.get('/proyecto/:id_proyecto', comentarioController.getComentariosByProyectoId);

module.exports = router;
