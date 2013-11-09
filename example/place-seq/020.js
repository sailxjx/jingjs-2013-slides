var fs = require('fs');
var cities = require('cities1000');
var split = require('split');


fs.createReadStream(cities.file)
    .pipe(split())
