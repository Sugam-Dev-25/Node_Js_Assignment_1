const express = require('express');
const HomeController = require('../controller/HomeController');
const router = express.Router();

router.get('/', HomeController.homepage);
router.get('/login', HomeController.loginpage);
router.get('/error', HomeController.errorpage);
router.get('/blank', HomeController.blankpage);
router.get('/buttons', HomeController.buttonspage);
router.get('/cards', HomeController.cardspage);
router.get('/charts', HomeController.chartspage);
router.get('/forgot-password', HomeController.forgetpasswordpage);
router.get('/register', HomeController.registerpage);
router.get('/tables', HomeController.tablespage);
router.get('/utilities-border', HomeController.utilitiesborderpage);
router.get('/utilities-color', HomeController.utilitiescolorpage);
router.get('/utilities-animation', HomeController.utilitiesanimationpage);
router.get('/utilities-other', HomeController.utilitiesotherpage);





router.get('/about', HomeController.aboutpage);
router.get('/contact', HomeController.contactpage);
router.get('/product', HomeController.productpage);

module.exports = router;