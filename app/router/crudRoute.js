const express = require('express');
const CrudController = require('../controller/CrudController');

const router = express.Router();

router.post('/create', CrudController.createCrud);
router.get('/read', CrudController.readCrud);

module.exports = router;