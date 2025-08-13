const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  id: Number,
  name: String,
  username: String,
  email: String
});

module.exports = mongoose.model('User', dataSchema);