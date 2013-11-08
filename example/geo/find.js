var placename = require('placename');
var fs = require('fs');

var data = fs.readFileSync('locations.json', 'utf8')
    .split('\n').filter(Boolean).map(JSON.parse)
;
var count = require('./authors.json').rows.reduce(function (acc, row) {
    acc[row.key[0]] = row.value;
    return acc;
}, {});

var totals = {};

(function next () {
    var row = data.shift();
    if (data.length === 0) {
        var sorted = Object.keys(totals).sort(function (a, b) {
            return totals[a] < totals[b] ? 1 : -1;
        });
        sorted.forEach(function (key) {
            console.log([ key, totals[key] ]);
        });
        return;
    }
    if (!row.location) return next();
    
    placename(row.location, function (err, res) {
        var r = res && res[0];
        if (!r) return next();
        
        var place = [
            r.name,
            /^[A-Z]+$/.test(r.adminCode) && r.adminCode,
            r.country
        ].filter(Boolean).join(', ');
        
        /*
        console.log(row.id, '[ ' + [
            count[row.id], place, r.lat, r.lon
        ].filter(Boolean).join(', ') + ' ]');
        */
        
        totals[place] = (totals[place] || 0) + count[row.id];
        next();
    });
})();
