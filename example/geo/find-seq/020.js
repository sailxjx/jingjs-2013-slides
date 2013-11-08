var fs = require('fs');


var data = fs.readFileSync('../locations.json', 'utf8')
    .split('\n').filter(Boolean).map(JSON.parse)
;
console.log(data);

// 020.js
