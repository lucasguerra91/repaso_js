const async = require('async');
const fs = require('fs');

async.eachSeries(['package.json', 'server.js'],function(file, callback){
    console.log('Reading file' + file);
    
    fs.readFile(file,'UTF-8', function read(err, data){
        console.log(data);
        callback();
    });
}, function(err){
    if (err) {
        console.log('A file failed to load');
    } else{
        console.log('ALl files have been successfully read');   
    }
});