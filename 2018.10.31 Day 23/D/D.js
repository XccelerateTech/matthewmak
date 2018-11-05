let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let fs = require('fs');

app.use(bodyParser.urlencoded({extended: false}));

app.get('/',function(req,res){
    fs.createReadStream(__dirname + '/index.html').pipe(res)
})

app.post('/',function(req,res){
    console.log(req.body.arr);
    var Arr = JSON.parse(req.body.arr);
    Arr = Arr.reduce(function(acc, no){
        return (acc + no);
    })
    console.log(Arr);
    res.send(`${Arr}`);
    res.end();
})

app.listen(8080);

