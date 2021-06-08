const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID:'722855609357-frf1cuvqpbu4pjg8hmnu70nr43dv2omq.apps.googleusercontent.com'
    }, () => {
        // passport callback function
    })
);