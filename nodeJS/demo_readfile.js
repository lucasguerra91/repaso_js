var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {


    // create file
    fs.appendFile('new_file1.txt', 'Nuevo contenido. \n', function(err) {
        console.log('Se abrió archivo.');
        if (err) throw err;
        console.log('Contenido guardado');
    });

    // read file
    fs.readFile('demofile1.html', function(err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        console.log('Se escribió contenido.');
        res.end();
    });



}).listen(8080);