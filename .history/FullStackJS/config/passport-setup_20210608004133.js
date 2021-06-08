const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID:'722855609357-frf1cuvqpbu4pjg8hmnu70nr43dv2omq.apps.googleusercontent.com',
        clientSecret:'Q1ADobCLdcuQOqG9XAag5cCz'
    }, () => {
        // passport callback function
    })
);