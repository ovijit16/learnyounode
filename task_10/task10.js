var net = require('net');
var port = Number(process.argv[2]);
var date = new Date();

function zeroFill(i) {
    return (i < 10 ? '0' : '') + i;
}

function timeNow() {
    return date.getFullYear() + '-' +
           zeroFill(date.getMonth() + 1) + '-' +
           zeroFill(date.getDate()) + ' ' +
           zeroFill(date.getHours()) + ':' +
           zeroFill(date.getMinutes());
}

var server = net.createServer((socket) => {
    socket.end(timeNow() + '\n');
});

server.listen(port);
