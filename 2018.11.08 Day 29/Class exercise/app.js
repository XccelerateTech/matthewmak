const express = require('express');
const basicAuth = require('express-basic-auth');

const app = express();

let Users = [
    {username: 'admin1',
    password: 'password1'},
    {username: 'admin2',
    password: 'password2'},
]

let myAuthFunc = (username,password)=>{
    return Users.some((user)=>{
        return user.username == username && user.password == password
    })
}

app.use(basicAuth({
    authorizer: myAuthFunc,
    challenge: true
}))

app.get('/',(req,res)=>{
    res.send('Hello there, General Kenobi')
})

app.listen(8080);