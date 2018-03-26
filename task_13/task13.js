var http = require('http');
var url = require('url');

var port = process.argv[2];

function parsetime(time) {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
}

function unixtime(time) {
    return {unixtime: time.getTime()}
}

var server = http.createServer((req, res) => {
    var newUrl = url.parse(req.url, true);
    var time = new Date(newUrl.query.iso);
    var result;

    if(/^\/api\/parsetime/.test(req.url)) {
        result = parsetime(time);
    } else if(/^\/api\/unixtime/.test(req.url)) {
        result = unixtime(time);
    }

    if (result) {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(result));
    } else {
        res.writeHead(404);
        res.end();
    }
});

server.listen(port, 'localhost', () => {
    console.log('Listening to port ' + port);
});
