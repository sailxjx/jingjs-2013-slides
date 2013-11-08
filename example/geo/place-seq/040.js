var fs = require('fs');
var cities = require('cities1000');
var split = require('split');
var through = require('through');
return console.log(cities.fields);

fs.createReadStream(cities.file)
    .pipe(split())
    .pipe(through(function (line) {
        console.log(line);
        // ..
    }))
;
// 040.js
