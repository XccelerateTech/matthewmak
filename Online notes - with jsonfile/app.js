// General Initialization
// require('dotenv').config();
// const NODE_ENV = process.env.NODE_ENV || 'development' 

// Dependency Injection for Routers and Service
var bodyParser = require('body-parser');

const ViewRouter = require('./ViewRouter');


const {app} = require('./utils/init-app')();
const basicAuth = require('express-basic-auth');

const JsonFile = require('./store/JsonFile');

// Basic auth

let NoteService;
let noteService;
const NoteRouter = require('./routers/NoteRouter')

let pass;
let Users;
let usersObj = new JsonFile('user.json');
let usersPms = usersObj.read((data)=>{
    return data.users;
})
usersPms.then((data)=>{
    Users = data;
})


let myAuthFunc = (username,password)=>{
    pass = false;
    for(let i = 0; i < Users.length;i++){
        if (Users[i].username == username && Users[i].password == password){
            pass = true;
            break;
        } 
    }
    
    return pass;
}

NoteService = require('./services/NoteService');
noteService = new NoteService(new JsonFile('notes.json'));
app.use('/api/notes', new NoteRouter(noteService).router());

app.use(basicAuth({
    authorizer: myAuthFunc,
    challenge: true
}))

// Start routing and rendering


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/', new ViewRouter().router());


// app.listen

app.listen(8080,()=>{
    console.log("Application started at port:8080");
});