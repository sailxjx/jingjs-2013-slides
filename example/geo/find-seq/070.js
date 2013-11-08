var placename = require('placename');
var fs = require('fs');

var data = fs.readFileSync('../locations.json', 'utf8')
    .split('\n').filter(Boolean).map(JSON.parse)
;

(function next () {
    if (data.length === 0) return;
    var row = data.shift();
    if (!row.location) return next();
    
    placename(row.location, function (err, res) {
        if (res && res.length) console.log(row.id, res[0]);
        next();
    });
})();

// 070.js
