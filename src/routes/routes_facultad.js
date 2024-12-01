const express = require('express');
const router = express.Router();
const facultadController = require('../controllers/controllers_facultad');

router.get('/', facultadController.getAllFacultades);
router.get('/:id', facultadController.getFacultadById);
router.post('/', facultadController.createFacultad);
router.put('/:id', facultadController.updateFacultad);
router.delete('/:id', facultadController.deleteFacultad);

module.exports = router;
