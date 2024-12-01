const express = require('express');
const router = express.Router();
const rolController = require('../controllers/controllers_rol');

router.get('/', rolController.getAllRoles);
router.get('/:id', rolController.getRolById);
router.post('/', rolController.createRol);
router.put('/:id', rolController.updateRol);
router.delete('/:id', rolController.deleteRol);

module.exports = router;
