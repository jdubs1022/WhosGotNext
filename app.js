const express = require('express');
const path = require('path');
const bodyPaser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

// Connect to database
mongoose.connect(config.database);

// On connection
mongoose.connection.on('connected', function(){
  console.log('Connected to database '+config.database);
});

// On error
mongoose.connection.on('error', function(err){
  console.log('Database error: '+err);
});

const app = express();

const users = require('./routes/users');

// Port number
const port = 5000

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyPaser.json());

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);

// Index route
app.get('/', function(req, res){
  res.send('Invalid Endpoint');
});

// Start Server
app.listen(port, function(){
  console.log('Server started on port '+ port);
});
