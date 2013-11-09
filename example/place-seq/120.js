var fs = require('fs');
var cities = require('cities1000');
var split = require('split');
var through = require('through');

var level = require('level');
var db = level(__dirname + '/data', { encoding: 'json' });

fs.createReadStream(cities.file)
    .pipe(split())
    .pipe(through(function (line) {
        var row = line.split('\t').reduce(function (acc, x, ix) {
            var key = cities.fields[ix];
            acc[key] = x;
            return acc;
        }, {});
        
        db.put(row.id, row);
        db.put(row.name.toLowerCase() + '!' + row.id, 0);
        row.alternativeNames.split(',').forEach(function (alt) {
            db.put(alt.toLowerCase() + '!' + row.id, 0);
        });
        console.log(row.name);
    }))
;
// 120.js
