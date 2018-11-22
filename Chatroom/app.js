const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const setupPassport = require('./passport');
const bodyParser = require('body-parser');
const session = require('express-session');
const router = require('./router')(express);

require('dotenv').config();
const port = process.env.PORT || 3030;
app.use(bodyParser.urlencoded({ extended: false }))

app.use(session({
    secret: 'supersecret'
}))

setupPassport(app);

app.use('/',router);

app.use('/public', express.static(__dirname + '/public'));

io.on('connection', (socket) => {
    console.log('A user connected to the socket');

    socket.on('chat message', function (msg) {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });
})

http.listen(port, () => {
    console.log(`Server started at port ${port}`);
});