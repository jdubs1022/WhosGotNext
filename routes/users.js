// This file handles all the routes associated with the Games

const express = require('express');
const router = express. Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

// Brings in the User model
const User = require('../models/user');

// Register - Creates a new user
router.post('/register', function(req, res, next){

  // First define a new user
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });

  // Adds new user to the User collection of the database
  User.addUser(newUser, function(err, user){
    if (err){
      res.json({success: false, message: 'Failed to register user'});
    } else {
      res.json({success: true, message: 'User registered'});
    }
  });
});

// Authenticate
router.post('/authenticate', function(req, res, next){

  // Get the username and password that is submitted
  const username = req.body.username;
  const password = req.body.password;

  // Use the passed in the username to find the user in the database
  User.getUserByUsename(username, function(err, user) {

    if (err) throw err;

    // Lines below alerts the user if the "user" is not found
    if (!user) {
      return res.json({success: false, msg: 'User not found'});
    }

    // Lines below compares the password the user enters into the form with
    // with the actual hashed password from the "user" that was retrieved
    // from the database
    User.comparePassword(password, user.password, function(err, isMatch){

      if (err) throw err;

      // Checks the isMatch function
      if (isMatch) {

        const token = jwt.sign({data: user}, config.secret, {
          // expires in a week
          expiresIn: 604800
        });

        res.json({
          success: true,
          token: 'JWT '+token,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email
          }
        });
      } else {
        // This else executes if the password entered by the user does not match
        return res.json({success: false, msg: 'Wrong password'});
      }
    });

  });
});

// Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), function(req, res, next){
  res.json({user: req.user});
});


module.exports = router;
