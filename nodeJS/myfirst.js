var http = require('http');
var url = require('url');
var fs = require('fs');

// create a server object 
http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' }); // write a response to the client 

    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;

    res.end(txt);
}).listen(8080);