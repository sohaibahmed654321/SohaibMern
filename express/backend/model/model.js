const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
});

const User = mongoose.model('User', userSchema, 'users'); // Explicitly setting the collection name as 'users'
module.exports = User;