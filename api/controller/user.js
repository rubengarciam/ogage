//user model and database methods
var db_user = require("../model/db_user");
var server = require("../server");
//passport for authentication
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

//auth token
var expressJwt = require('express-jwt');
var jwt = require('jsonwebtoken');


//passport config for login
passport.use(new LocalStrategy(
  function(username, password, done) {
      //console.log(username);
    // asynchronous verification, for effect...
    process.nextTick(function () {
      // Find the user by username.  If there is no user with the given
      // username, or the password is not correct, set the user to `false` to
      // indicate failure and set a flash message.  Otherwise, return the
      // authenticated `user`.
      db_user.findByUsername(username, function(err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false, { message: 'Unknown user ' + username }); }
        if (user.password != password) { return done(null, false, { message: 'Incorrect password' }); }
        return done(null, user);
      })
    });
  }
));

//login method
exports.login = function(req, res, next) {
    
    passport.authenticate('local', function(err, user, info) {
        if (err) { return next(err); }
        if (!user) { return res.json({success: false, message: info.message}); }
        //success
        //auth token to be sent
        var token = jwt.sign(user, server.secret, { expiresInMinutes: 60*5 });
        res.json({success: true, auth: token});
        
  })(req, res, next);
};



