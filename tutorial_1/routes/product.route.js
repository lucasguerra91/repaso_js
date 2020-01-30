const express = require('express');
const router = express.Router();

// Require the controllers NOT CREATE YET!!
const product_controller = require('../controllers/product.controller');

// a simple test url to check that all of our files are communicating correctly

router.get('/test', product_controller.test);

// lo exporto para que los demas modulos puedan usarlo
module.exports = router;