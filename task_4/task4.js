var fs = require('fs');

//var file = 'text.txt';
var file = process.argv[2];

fs.readFile(file, (err, contents) => {
    var cLines = contents.toString().split('\n').length - 1;
    console.log(cLines);
});
