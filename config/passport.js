// This file protects specific content from being accessed by unauthorized users

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const config = require('../config/database');

module.exports = function(passport){
  let opts = {};
  // Using authorizaton of the header to pass the token back and forth
  //opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");

  // Line below adds the key from the "config" file
  opts.secretOrKey = config.secret;

  passport.use(new JwtStrategy(opts, function(jwt_payload, done){
    console.log(jwt_payload);
    User.getUserById(jwt_payload.data._id, function(err, user){
      // Line below checks for an error
      if(err){
        return done(err, false);
      }

      // Line below checks for the user
      if(user){
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  }));
}
