var fs = require('fs');
var path = require('path');

//var p = "files";
//var ext ="txt";
//var ext ="docx";


var p = process.argv[2];
var ext = process.argv[3];


fs.readdir(p, (err, list) => {
    list.forEach((file) => {
        if(path.extname(file) === '.' + ext) {
            console.log(file);
        }
    });
});
