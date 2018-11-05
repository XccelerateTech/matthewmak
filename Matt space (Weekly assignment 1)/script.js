console.log('Server started');

const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const fs = require('fs');
const app = express();
let Cache = {};
let fileArr;
let fileObj = {}; 
let readDir = (path)=>{
    return new Promise((res,rej)=>{
        fs.readdir(path,(err,files)=>{
            fileArr = files;
            res();
        })
    })
}
function updateFileObj(){
    readDir('./files').then(()=>{
        fileObj = {};
        for (let i = 0; i < fileArr.length; i++) {
            fileObj[i] = fileArr[i];
        }
        console.log(fileObj);
    });
}
updateFileObj();

app.get('/filesdir',(req,res)=>{
    res.send(fileObj);
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(fileUpload());
app.use('/assets',express.static(__dirname + '/assets'));


app.get('/',(req,res)=>{
    updateFileObj();
    fs.createReadStream(__dirname + '/index.html').pipe(res)
});

app.post('/upload',(req,res)=>{
    if (req.files){
        let file = req.files.foo,
            filename = file.name;

        file.mv(__dirname + '/files/' + filename,(err) => {
            if(err){
                console.log(err);
                res.end()
            } else {
                updateFileObj();
                res.redirect('/');
            }
        })
    }
});

app.get('/files/:name',(req,res)=>{
    res.download(__dirname + '/files/' + req.params.name);
});

app.get('/filesdelete/:num',(req,res)=>{
    fs.unlinkSync(__dirname + '/files/' + fileObj[req.params.num])
    updateFileObj();
    res.redirect('back');
})

// app.use('/', express.static('files'));

app.listen(8080)
