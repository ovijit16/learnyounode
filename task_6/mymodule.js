var fs = require('fs');
var path = require('path');

module.exports = (p, ext, callback) => {
    fs.readdir(p, (err, list) => {
        if(err) {
            return callback(err);
        }

        list = list.filter((file) => {
            return path.extname(file) === '.' + ext;
        });

        callback(null, list);
    });
};
