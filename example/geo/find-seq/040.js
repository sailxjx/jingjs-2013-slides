var fs = require('fs');


var data = fs.readFileSync('../locations.json', 'utf8')
    .split('\n').filter(Boolean).map(JSON.parse)
;

(function next () {
    if (data.length === 0) return;
    var row = data.shift();
    // ...
})();
