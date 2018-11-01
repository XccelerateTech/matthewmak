let http = require('http');
let fs = require('fs');

http.createServer(function(req,res){
    if (req.url === '/' || req.url === '/index'){
        res.writeHead(200, {'Content-Type' : 'text/html'})
        fs.createReadStream(__dirname + '/flower/index.html').pipe(res);
    } else if (req.url === '/stylesheet.css') {
        res.writeHead(200, {'Content-Type' : 'text/css'})
        fs.createReadStream(__dirname + '/flower/stylesheet.css').pipe(res);
    } else {
        fs.createReadStream(__dirname + '/flower' + req.url).pipe(res);
    }

}).listen(8080,'127.0.0.1');