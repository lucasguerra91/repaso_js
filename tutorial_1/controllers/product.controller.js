const Product = require('../models/product.model');

// Simple version, without calidation or sanitation

exports.test = function(req, res) {
    res.send('Respuesta del controlador TEST');
};