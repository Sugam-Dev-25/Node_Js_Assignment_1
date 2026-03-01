const express = require('express');
const CrudController = require('../controller/CrudController');

const router = express.Router();

router.post('/create', CrudController.createCrud);
router.get('/read', CrudController.readCrud);
router.get('/read/:id', CrudController.getById);
router.put('/update/:id', CrudController.updateCrud);
router.delete('/delete/:id', CrudController.deleteCrud);


module.exports = router;