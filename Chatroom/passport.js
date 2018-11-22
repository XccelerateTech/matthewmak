const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

let users = [
    {
        'email': 'admin1@email.com',
        'password': 'password1'
    },
    {
        'email': 'admin2@email.com',
        'password': 'password2'
    }
]

module.exports = (app) => {
    app.use(passport.initialize());
    app.use(passport.session());

    passport.use('local-login', new LocalStrategy(
         (email, password, done) => {
            console.log('trying the local strategy')
            try {
                console.log(`email: ${email}, password: ${password}`);
                let user = {};
                for (let i in users) {
                    if (users[i]['email'] == email) {
                        user = users[i];
                    }
                }
                if (user['password'] == undefined) {
                    return done(null, false, { message: 'This email has not been registered yet...' });
                } else if (user['password'] == password) {
                    return done(null, user)
                } else {
                    return done(null, false, { message: 'Password incorrect...' })
                }
            } catch (err) {
                return done(err);
            }
        }
    ))

    passport.serializeUser((user, done) => {
        done(null, user.email);
    });

    passport.deserializeUser(async (email, done) => {
        let user = {};
        for (let i in users) {
            if (users[i]['email'] == email) {
                user = users[i];
            }
        }
        if (user['email'] == undefined) {
            return done(null,false,{message: 'This deserialized email has not been registered yet...'})
        } else {
            return done(null,user);
        }
    })

}