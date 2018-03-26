var mymodule = require('./mymodule.js');

//var p = "files";
//var ext ="txt";
//var ext ="docx";


var p = process.argv[2];
var ext = process.argv[3];

mymodule(p, ext, (err, list) => {
    if(err) {
        console.log(err);
    } else {
        list.forEach((file) => {
            console.log(file);
        });
    }
});
