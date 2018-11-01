
function copy(path){
    var fs = require('fs');
    var readable = fs.createReadStream(__dirname + path, { encoding: 'utf8', highWaterMark: 32*1024 });
    var writeable = fs.createWriteStream(__dirname + '/Here/textcopy.txt');
    readable.pipe(writeable);
}


copy('/file.txt')
