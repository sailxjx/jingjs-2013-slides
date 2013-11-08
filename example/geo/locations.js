var data = require('./authors.json').rows.sort(cmp);
var hyperquest = require('hyperquest');
var concat = require('concat-stream');

var start = process.argv[2];
var index = 0;
if (start !== undefined) {
    for (; index < data.length; index++) {
        if (data[index].key[0] === start) {
            index ++;
            break;
        }
    }
}

(function next (ix) {
    if (ix >= data.length) return;
    var key = data[ix].key[0];
    
    var hq = hyperquest('https://api.github.com/users/' + key);
    hq.on('response', function (res) {
        var remaining = parseInt(res.headers['x-ratelimit-remaining'], 10);
        console.error('# ' + remaining);
        var reset = parseInt(res.headers['x-ratelimit-reset'], 10);
        
        res.pipe(concat(function (body) {
            if (!/^2\d\d/.test(res.statusCode)) {
                if (/^4/.test(res.statusCode)) return next_();
                return console.error(res.statusCode, body);
            }
            var user = JSON.parse(body);
            
            console.log(JSON.stringify({
                id: key,
                name: user.name,
                location: user.location
            }));
            
            if (remaining === 0) {
                setTimeout(next_, Math.max(0, reset * 1000 - Date.now()));
            }
            else next_();
        }));
    });
    
    function next_ () {
        setTimeout(function () { next(ix + 1) }, 3000);
    }
})(index);

function cmp (a, b) { return a.value < b.value ? 1 : -1 }
