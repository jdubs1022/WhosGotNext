// This file creates the mongoose database model for user

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const UserSchema = mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

// Allows User to be used outside this file
const User = module.exports = mongoose.model('User', UserSchema);

// Get User by ID and use the function outside this file
module.exports.getUserById = function(id, callback){
  User.findById(id, callback);
}

// Get User by Userename and use the function outside this file
module.exports.getUserByUsename = function(username, callback){
const query = {username:username}
  User.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback){
  bcrypt.genSalt(10, function(err, salt){
    bcrypt.hash(newUser.password, salt, function(err, hash){
      if(err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
}

// Compare the passed-in "candidatePassword" with the "hash"
module.exports.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, function(err, isMatch){
    if(err) throw err;
    callback(null, isMatch);
  });
}
