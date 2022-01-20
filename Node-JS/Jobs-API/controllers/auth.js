const { StatusCodes } = require('http-status-codes');

const User = require('../models/User');
const { BadRequestError } = require('../errors');

const register = async (req, res) => {
  // Optional setting a check in the controller, can also use mongoose for validation
  if (!name || !email || !password)
    throw new BadRequestError('Please provide name, email and password.');

  const user = await User.create({ ...req.body });
  const token = user.createJWT();
  // Instead of sending the username, you can also have frontend decode the token
  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
};

const login = async (req, res) => {
  res.send('Login user');
};

module.exports = { register, login };
