const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys');
const User = require('../models/user-models');

passport.serializeUser((user, done) => {
   done(null, user.id) 
});

passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: '/auth/google/redirect'
    }, (accessToken, refreshToken, profile, done) => {
        // passport callback function
        console.log('passport callback function fired:');
        console.log(profile);

        //Check if user already exist in our database
        User.findOne({googleId: profile.id}).then((currentUser) => {
            if(currentUser){
                console.log('user is:', currentUser);
                done()
            }else {
                new User({
                    username: profile.displayName,
                    googleId: profile.id
                }).save().then((newUser) => {
                    console.log('new user created:' + newUser);
                });
            }
        });
      
    })
);