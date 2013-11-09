var db = require('placename').db;
var JSONStream = require('JSONStream');

db.createReadStream()
    .pipe(JSONStream.stringify())
    .pipe(process.stdout)
;
