var level = require('level');
var db = level(__dirname + '/data', { encoding: 'json' });
var through = require('through');

module.exports = function (query) {
    var pending = 0, ended = false;
    var stream = through(write, end);
    
    return db.createReadStream({ start: query, end: query + '\uffff' })
        .pipe(stream);
    ;
    
    function write (row) {
        var key = row.key.split('!')[1];
        ++ pending;
        db.get(key, function (err, r) {
            if (r) stream.queue(r);
            if (--pending === 0 && ended) done();
        });
    }
    function end () {
        ended = true;
        if (pending === 0) done();
    }
    function done () { stream.queue(null) }
};
