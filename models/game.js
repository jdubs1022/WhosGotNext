// This file creates the mongoose database model for game

const mongoose = require('mongoose');
const config = require('../config/database');

const Schema = mongoose.Schema;

// Below the Game Mongoose model is created
// Game Schema
const GameSchema = new Schema({

  title: {
    type: String,
    required: true,
    unique: true
  },

  sport: {
    type: String,
    required: true
  },

  owner: {
    type: String,
    required: true
  },

  playernum: {
    type: Number,
    required: true
  },

  players: {
    type: Array,
    required: true
  },

  date: {
    type: Date,
    required: true
  },

  duration: {
    type: Number,
    required: true
  },

  startTime: { // ****
    type: String,
    required: true
  },

  dateTime: {
    type: Date,
    required: true
  },

  latitude: {
    type: Number,
    required: true,
    default: 0
  },

  longitude: {
    type: Number,
    required: true,
    defaul: 0
  }

});

// Game model is exported
const Game = module.exports = mongoose.model('Game', GameSchema);


// Below are the Game model functions which will be called OUTSIDE this file

module.exports.getGameByID = function(id, callback) {
  // Finds a specific game by its ID
  Game.findById(id, callback);
}

module.exports.getGameByTitle = function(title, callback) {
  // Finds a specific game by its title
  const query = {title: title};
  Game.findOne(query, callback);
}

module.exports.getGameByDate = function(date, callback) {
  // Finds all games with the passed-in date
  const query = {date: date};
  Game.find(query).exec(callback);
}

module.exports.getGameBySport = function(sport, callback) {
  // Find all games with the passed-in sport
  const query = {sport: sport};
  Game.find(query).exec(callback);
}

module.exports.getGameBySportAndDate = function(sport, date, callback) {
  // Find all games with the passed-in sport and date
  const query = {sport: sport, date: date};
  Game.find(query).exec(callback);
}

module.exports.addGame = function(newGame, callback) {
  // Adds a new game to the Game collection of the connected database
  newGame.save(callback);
}

module.exports.addPlayerToGame = function(gameID, newPlayer, callback) {
  // Add a new player to the passed-in game
  // gameID - the database id of the game
  // newPlayer - the username of the new player being added
  const query = {_id: gameID};
  const update = {$push: {players: { $each: [newPlayer], $sort: 1}}};
  Game.findOneAndUpdate(query, update, callback);
}

module.exports.incrementPlayerNum = function(gameID, callback) {
  // Increment the playernum of the passed-in games
  const query = {_id: gameID};
  const update = {$inc: {playernum: 1}};
  Game.findOneAndUpdate(query, update, callback);
}

module.exports.changeLatandLong = function(newLat, newLong, callback) {
  // Update the values for latitude and longitude
  const query = {_id: gameID};
  const update = {$set: {latitude: newLat, longitude: newLong}};
  Game.findOneAndUpdate(query, update, callback);
}
