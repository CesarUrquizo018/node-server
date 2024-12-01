const express = require('express');
const router = express.Router();
const calificacionController = require('../controllers/controllers_calificacion');

// Rutas para operaciones CRUD de Calificaciones
router.get('/', calificacionController.getAllCalificaciones);
router.get('/:id', calificacionController.getCalificacionById);
router.post('/', calificacionController.createCalificacion);
router.put('/:id', calificacionController.updateCalificacion);
router.delete('/:id', calificacionController.deleteCalificacion);
router.get('/proyecto/:id_proyecto', calificacionController.getCalificacionesByProyectoId); // Nueva ruta


module.exports = router;
