let express = require('express');
let app = express();
let bodyParser = require('body-parser');

let fs = require('fs');

app.use(bodyParser.urlencoded({ extended: false }))
app.use('/assets', express.static('flower/assets'));

app.get('/', function(req,res){
    fs.createReadStream(__dirname + '/flower/index.html').pipe(res)
})

app.get('/stylesheet.css', function(req,res){
    fs.createReadStream(__dirname + '/flower/stylesheet.css').pipe(res)
})

app.post('/flower_check', function(req,res){
    console.log(req.body);
    res.end();
})


app.listen(8080);