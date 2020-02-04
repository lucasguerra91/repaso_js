const express = require('express');
const router = express.Router();

// Require the controllers NOT CREATE YET!!
const product_controller = require('../controllers/product.controller');

// a simple test url to check that all of our files are communicating correctly

router.get('/test', product_controller.test);

// para leer los datos de la db
router.get('/:id', product_controller.product_details);

// para cargar producto
router.post('/create', product_controller.product_create);

// actualizar
router.put('/:id/update', product_controller.product_update);


// lo exporto para que los demas modulos puedan usarlo
module.exports = router;