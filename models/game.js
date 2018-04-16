const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  joined_users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  title: String,
  where: String,
  start: Date,
  location: {
    lat: String,
    lng: String
  }
});

const Game = mongoose.model('Game', gameSchema);
module.exports = Game;
