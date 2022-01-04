const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const { BadRequestError } = require('../errors');

const register = async (req, res) => {
  // Optional setting a check in the controller, can also use mongoose for validation
  if (!name || !email || !password)
    throw new BadRequestError('Please provide name, email and password.');

  const user = await User.create({ ...req.body });
  // Never place the secret here
  const token = jwt.sign({ userId: user._id, name: user.name }, 'jwtSecret', { expiresIn: '30d' });
  // Instead of sending the username, you can also have frontend decode the token and take the username from there
  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
};

const login = async (req, res) => {
  res.send('Login user');
};

module.exports = { register, login };
