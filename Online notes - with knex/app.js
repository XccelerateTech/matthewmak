// General Initialization
// require('dotenv').config();
// const NODE_ENV = process.env.NODE_ENV || 'development' 

// Dependency Injection for Routers and Service
const bodyParser = require('body-parser');
const pg = require('pg');
require('dotenv').config();

const knex = require('knex')({
    client: 'postgresql',
    connection: {
        database:   process.env.DB_NAME,
        user:       process.env.USERNAME,
        password:   process.env.PASSWORD
    }
});

const ViewRouter = require('./ViewRouter');


const {app} = require('./utils/init-app')();
const basicAuth = require('express-basic-auth');

// Basic auth

const NoteRouter = require('./routers/NoteRouter')
let pass;
let myAuthFunc = async (username,password,cb)=>{
    pass = false;
    let Users = [];
    await knex('noteuser').select('*').then((rows) => {
        Users = rows;
    })

    for(let i = 0; i < Users.length;i++){
        if (Users[i].username == username && Users[i].password == password){
            pass = true;
            break;
        } 
    }
    return cb(null,pass);
}


app.use(basicAuth({
    authorizer: myAuthFunc,
    challenge: true,
    authorizeAsync: true
}))

// Start routing and rendering

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/', new ViewRouter().router());
let NoteService = require('./services/NoteService');
let noteService = new NoteService(knex);
app.use('/api/notes', new NoteRouter(noteService).router());



// app.listen

app.listen(8080,()=>{
    console.log("Application started at port:8080");
});