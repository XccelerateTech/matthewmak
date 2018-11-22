const passport = require('passport');

module.exports = (express) => {
    const router = express.Router();

    let isLoggedIn = (req, res, cb) => {
        if (req.isAuthenticated()) {
            return cb();
        }
        res.redirect('/login');
    }

    router.get('/chatroom', isLoggedIn, (req,res) => {
        res.sendFile(__dirname + "/chatroom.html");
    })

    router.get('/login',(req,res) => {
        res.sendFile(__dirname + "/login.html");
    })

    router.post('/login', passport.authenticate('local-login', {
        successRedirect: '/chatroom',
        failureRedirect: '/error'
    }))

    router.get('/error',(req,res) => {
        res.send('User email or passport are incorrect');
    })

    router.get('/', (req, res) => {
        console.log('login page');
        res.sendFile(__dirname + '/login.html');
    });

    return router;
}