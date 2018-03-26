var fs = require('fs');

//var buffObj = fs.readFileSync('text.txt');
var buffObj = fs.readFileSync(process.argv[2]);
var cLines = buffObj.toString().split('\n').length - 1;

console.log(cLines);
