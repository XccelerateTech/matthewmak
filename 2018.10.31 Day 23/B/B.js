let express = require('express');
let app = express();

let fs = require('fs');

app.use('/assets', express.static('flower/assets'));

app.get('/', function(req,res){
    fs.createReadStream(__dirname + '/flower/index.html').pipe(res)
})

app.get('/stylesheet.css', function(req,res){
    fs.createReadStream(__dirname + '/flower/stylesheet.css').pipe(res)
})


app.listen(8080);