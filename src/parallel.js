    async = require('async'),
    fs = require('fs');

async.parallel(
    [
        function (callback) {
            fs.readFile('resources\\primer-texto.txt', 'utf8', callback);
        },
        function (callback) {
            fs.readFile('resources\\segundo-texto.txt', 'utf8', callback);
        }
    ],
    function (err, values) {
        let text = err === null ? values : err;
        console.log(text);
    }
);