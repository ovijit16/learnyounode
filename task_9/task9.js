var http = require('http');
var bl = require('bl');
var result = [];
var counter = 0;

function printMethod() {
    for(var i = 0; i < 3; i++) {
        console.log(result[i]);
    }
}

function getHttp(ind) {
    http.get(process.argv[2 + ind], (response) => {
        response.pipe(bl( function (err, data) {
            if(err) {
                return console.error(err);
            }

            result[ind] = data.toString();
            counter++;

            if(counter == 3) {
                printMethod();
            }
        }));
    });
}

for(var i = 0; i < 3; i++) {
    getHttp(i);
}
