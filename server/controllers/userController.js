const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

exports.signup = async (req, res) => {
  hash = bcrypt.hash(req.body.password, 10);
  console.log(req.body);
  const newUser = await User.create({
    username: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username: username });
  if (!user) res.status(400).json({ error: 'No User' });

  res.json('logged in');
};
