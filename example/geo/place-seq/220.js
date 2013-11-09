var level = require('level');
var db = level(__dirname + '/data', { encoding: 'json' });

var query = process.argv.slice(2).join(' ');

