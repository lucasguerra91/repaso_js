const Product = require('../models/product.model');

// Simple version, without validation or sanitation

exports.test = function(req, res) {
    res.send('Respuesta del controlador TEST');
};

// crear un documento en la coleccion
exports.product_create = function(req, res) {
    let product = new Product({
        name: req.body.name,
        price: req.body.price
    });

    product.save(function(err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })
};

// visualizar un producto

exports.product_details = function(req, res) {
    Product.findById(req.params.id, function(err, product) {
        if (err) return next(err);
        res.send(product);
    })
};

exports.product_update = function(req, res) {
    Product.findByIdAndUpdate(req.params.id, { $set: req.body }, function(err, product) {
        if (err) return next(err);
        res.send('Product udpated.');
    });
};