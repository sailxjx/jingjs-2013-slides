var placename = require('placename');
var fs = require('fs');

var data = fs.readFileSync('../locations.json', 'utf8')
    .split('\n').filter(Boolean).map(JSON.parse)
;
var count = require('../authors.json').rows.reduce(function (acc, row) {
    acc[row.key[0]] = row.value;
    return acc;
}, {});
return console.log(count);

(function next () {
    if (data.length === 0) return;
    var row = data.shift();
    if (!row.location) return next();
    
    placename(row.location, function (err, res) {
        if (res && res.length) console.log(row.id, res[0]);
        next();
    });
})();

// 080.js
