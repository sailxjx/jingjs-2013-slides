var level = require('level');
var db = level(__dirname + '/data', { encoding: 'json' });

var query = process.argv.slice(2).join(' ');
db.createReadStream({ start: query, end: query + '\uffff' })
    .on('data', function (row) {
        console.log(row);
    })
;
// 240.js