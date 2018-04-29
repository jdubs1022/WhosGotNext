// This is our main server entry point file

// Below we bring in all the modules we require and bring in all of our dependencies
const express = require('express');
const path = require('path');
const bodyPaser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const geocoding = new require('reverse-geocoding');


// Connect to database
mongoose.connect(config.database);

// On connection
// The code below lets us know that we have connected to the database
mongoose.connection.on('connected', function(){
  console.log('Connected to database '+config.database);
});

// On error
// The code below tells us if there is an error while trying to connect to
// the MongoDB database and tells us what that error is
mongoose.connection.on('error', function(err){
  console.log('Database error: '+err);
});

// initializes express
const app = express();

// Brings in our users.js file from the routes folder
const users = require('./routes/users');
const games = require('./routes/games');

// Port number
const port = 5000;

// CORS Middleware
// cors will allow us to make a request to our api from a different domain name
app.use(cors());

// Set Static Folder to the "public" folder
// This will be a place for all of our client-side files
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
// Body Parser allows us to grab the data when a user submits a form
app.use(bodyPaser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Includes the authentication code from "passport.js" file into this file
require('./config/passport')(passport);

// Below allows us to use "/users" for all of our user routes
app.use('/users', users);
app.use('/games', games);

// Index route
app.get('/', function(req, res){
  res.send('Invalid Endpoint');
});

// Code below ensures that every route (besides the ones specified here) go
// to the "index.html" file
app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start Server
app.listen(port, function(){
  console.log('Server started on port '+ port);
});
