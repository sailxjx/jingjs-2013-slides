var fs = require('fs');
var cities = require('cities1000');
var split = require('split');
var through = require('through');

fs.createReadStream(cities.file)
    .pipe(split())
    .pipe(through(function (line) {
        console.log(line);
        // ..
    }))
;
// 030.js
