var fs = require('fs');
var cities = require('cities1000');
var split = require('split');
var through = require('through');

fs.createReadStream(cities.file)
    .pipe(split())
    .pipe(through(function (line) {
        var row = line.split('\t').reduce(function (acc, x, ix) {
            var key = cities.fields[ix];
            acc[key] = x;
            return acc;
        }, {});
        console.log(row);
    }))
;
// 070.js
