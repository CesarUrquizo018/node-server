const express = require('express');
const router = express.Router();
const universidadController = require('../controllers/controllers_universidad');

router.get('/', universidadController.getAllUniversidades);
router.get('/:id', universidadController.getUniversidadById);
router.post('/', universidadController.createUniversidad);
router.put('/:id', universidadController.updateUniversidad);
router.delete('/:id', universidadController.deleteUniversidad);

module.exports = router;
