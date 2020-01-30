const express = require('express');
const bodyParser = require('body-parser');

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://testing:test123@ds315359.mlab.com:15359/testing';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// Importo las rutas
const product = require('../tutorial_1/routes/product.route');

// iniciar la express app
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/products', product);

let port = 3000;

app.listen(port, () => {
    console.log('Server started on port: ' + port);
});