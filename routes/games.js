// This file handles all the routes associated with the Games

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require("passport");

// Bringing in the Game Model
const Game = require("../models/game");

// The line of code: "passport.authenticate('jwt', {session:false})" prevents
// unauthorized access of specific content

// Create - Creates a new Game
router.post("/create", passport.authenticate('jwt', {session:false}), function (req, res, next) {

  // Get Date and Time information
  let hours = Number(req.body.duration);
  let startDate = new Date(req.body.date + 'T' + req.body.startTime + ":00");
  let endDate = new Date(req.body.date + 'T' + req.body.startTime + ":00");
  endDate.setHours(endDate.getHours() + hours);

  // Below We Define a new Game
  let newGame = new Game({

    title: req.body.title,
    sport: req.body.sport,
    owner: req.user.username,
    playernum: 1,
    players: [req.user.username],
    date: new Date(req.body.date),
    duration: hours,
    startTime: req.body.startTime,
    startDateTime: startDate,
    endDateTime: endDate,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    address: req.body.address

  });


  // Then we add the new game to the Game collection of the database
  Game.addGame(newGame, function(err, game) {
    if (err) {
      console.log(err);
      res.json({success: false, msg: "Failed to create game"});
    } else {
      console.log("DURATION: ");
      console.log(hours);
      console.log("START - WHAAAAAAAAAAAAAAAT!!!");
      console.log(startDate.toLocaleDateString());
      console.log(startDate.toLocaleTimeString("en-US"));
      console.log("END - WHAAAAAAAAAAAAAAAT!!!");
      console.log(endDate.toLocaleDateString());
      console.log(endDate.toLocaleTimeString("en-US"));
      res.json({success: true, msg: "Game Created"});
    }
  });

});


// Search
router.post("/search", passport.authenticate('jwt', {session:false}), function (req, res, next) {

  // Get the sport and the date information
  const sport = req.body.sport;
  const date = req.body.date;
  const latitude = req.body.latitude;
  const longitude = req.body.longitude;
  const userLocation = {lat: latitude, long: longitude};

  // Line below handles the case of user entering nothing
  if ( sport == null && date == null && latitude == null && longitude == null ) {
    return res.json({success: false, msg: "Must enter something!"});
  }

  // Line below handles the case of empty lat and long values
  if ( latitude == null || longitude == null ) {
    return res.json({success: false, msg: "Must enter a location!"});
  }

  // Lines below handle the three different cases
  if (sport && date) {
    // User enters both the sport and date to search
    Game.getGameBySportAndDate(sport, date, function(err, games){

      if (err) throw err;

      let gLength = games.length;
      // Lines below alert the user if no game is not found
      if (gLength == 0) {
        return res.json({success: false, msg: 'No Game matches entered parameters'});
      } else {
        return res.json({
          success: true,
          msg: (gLength == 1) ? 'A match was found' : `${gLength} matches were found`,
          results: {games: games, userLocation: userLocation}
        });
      }

    });
  } else if (sport && date == null) {
    // User enters only the sport to search
    Game.getGameBySport(sport, function(err, games){

      if (err) throw err;

      let gLength = games.length;

      // Lines below alert the user if no game is not found
      if (gLength == 0) {
        return res.json({success: false, msg: 'No Game matches entered sport parameter'});
      } else {
        return res.json({
          success: true,
          msg: (gLength == 1) ? 'A match was found' : `${gLength} matches were found`,
          results: {games: games, userLocation: userLocation}
        });
      }

    });
  } else if (sport == null && date) {
    // User enters only the date to seach
    Game.getGameByDate(date, function(err, games){

      if (err) throw err;

      let gLength = games.length;

      // Lines below alert the user if no game is not found
      if (gLength == 0) {
        return res.json({success: false, msg: 'No Game matches entered date parameter'});
      } else {
        console.log(gLength);
        return res.json({
          success: true,
          msg: (gLength == 1) ? 'A match was found' : `${gLength} matches were found`,
          results: {games: games, userLocation: userLocation}
        });
      }

    });
  } else {
    // User enters nothing to be searched
    return res.json({success: false, msg: "Cannot leave both date and sport field empty"});
  }
});

// Result
router.get("/result", passport.authenticate('jwt', {session:false}), function(req, res, next) {
  res.json({games: req.games, userLocation: req.userLocation});
});


// Add new player to the players array of the chosen game /:gameID/:username
// ?gameID=5ae38b830496db40a8d05947&username=TrayTray
router.put("/add", function(req, res, next) {

  // Declare needed variables
  let username = req.params.username;
  let gameID = req.params.gameID;
  let players = [];

  console.log("HOMEBOY!!!");
  console.log(res.headers);
  console.log(req.params.username);

  if (!username) {
    return res.json({ success: false, msg: "No username assigned!" });
  }

  // Find the specific game that is to be joined
  Game.getGameByID(gameID, function(err, foundGame){

    if (err) throw err;

    // Lines below check to make sure that the game actually exits
    if (foundGame) {
      players = foundGame.players;
    } else {
      return res.json({ success: false, msg: "The game does not exist!" });
    }

    // Check to make sure that user is not already in game
    if (players.indexOf(username) != -1){
      return res.json({success: false, msg: "You are already in this game"});
    }

    // Add player to the correct game
    Game.addPlayerToGame(gameID, username, function(err, game){

      if (err) throw err;

      console.log("The players array has been updated!");
      console.log(game);
    });

    // Add player to the correct game
    Game.incrementPlayerNum(gameID, function(err, game){

      if (err) throw err;

      console.log("The playernum has been incremented!");
      console.log(game);

    });

    // Return that the adding of the player to the game was successfull!
    return res.json({success: true, msg: "You have now been added to the game!"});

  });

});


// Remove All Games from document
router.delete("/deleteAll", passport.authenticate('jwt', {session:false}), function(req, res, next){
  Game.deleteAllGames( function( err ){
    if (err) {
      console.log(err);
      res.json({success: false, msg: "Games were not deleted"});
      throw err;
    } else {
      console.log("Every Game has been deleted!");
      res.json({success: true, msg: "Every Game has been deleted!"});
    }
  });
});

module.exports = router;
