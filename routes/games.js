// This file handles all the routes associated with the Games

const express = require('express');
const router = express. Router();
const jwt = require('jsonwebtoken');
const passport = require("passport");

// Bringing in the Game Model
const Game = require("../models/game");

// The line of code: "passport.authenticate('jwt', {session:false})" prevents
// unauthorized access of specific content

// Create - Creates a new Game
router.post("/create", passport.authenticate('jwt', {session:false}), function (req, res, next) {

  // Below We Define a new Game
  let newGame = new Game({

    title: req.body.title,
    sport: req.body.sport,
    owner: req.user.username,
    playernum: 1,
    players: [req.user.username],
    date: new Date(req.body.date),
    duration: req.body.duration,
    startTime: req.body.startTime,
    dateTime: new Date(req.body.date + 'T' + req.body.startTime + ":00"),
    latitude: req.body.latitude,
    longitude: req.body.longitude

  });

  // Then we add the new game to the Game collection of the database
  Game.addGame(newGame, function(err, game) {
    if (err) {
      console.log(err);
      res.json({success: false, msg: "Failed to create game"});
    } else {
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
        console.log(gLength);
        console.log(games[1]);
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

//

module.exports = router;
