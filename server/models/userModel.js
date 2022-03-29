const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'A username is required'],
    unique: [true, 'username must be unique'],
  },

  email: {
    unique: [true, 'Email already exists'],
    type: String,
    required: [true, 'You need a login email'],
    lowercase: true,
  },

  password: {
    select: false,
  },
});

//MODEL
const User = mongoose.model('User', userSchema);

module.exports = User;
