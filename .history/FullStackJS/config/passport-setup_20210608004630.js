const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require();

passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID:'',
        clientSecret:''
    }, () => {
        // passport callback function
    })
);