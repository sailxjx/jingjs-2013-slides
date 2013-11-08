var placename = require('placename');
var fs = require('fs');

var data = fs.readFileSync('../locations.json', 'utf8')
    .split('\n').filter(Boolean).map(JSON.parse)
;
var count = require('../authors.json').rows.reduce(function (acc, row) {
    acc[row.key[0]] = row.value;
    return acc;
}, {});
var totals = {};

(function next () {
    if (data.length === 0) return;
    var row = data.shift();
    if (!row.location) return next();
    
    placename(row.location, function (err, res) {
        var r = res && res[0];
        if (!r) return next();
        var place = [
            r.name, /^[A-Z]+$/.test(r.adminCode) && r.adminCode, r.country
        ].filter(Boolean).join(', ');
        totals[place] = (totals[place] || 0) + count[row.id];
        next();
    });
})();
