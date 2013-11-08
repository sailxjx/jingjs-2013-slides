var hyperquest = require('request');
var href = 'http://isaacs.iriscouch.com/registry/_design/app'
    + '/_view/npmTop?group_level=1';

hyperquest(href).pipe
