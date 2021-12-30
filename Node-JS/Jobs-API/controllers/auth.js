const { StatusCodes } = require('http-status-codes');
const bcrypt = require('bcryptjs');

const User = require('../models/User');
const { BadRequestError } = require('../errors');

const register = async (req, res) => {
  const { name, email, password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const tempUser = { name, email, password: hashedPassword };

  // Optional setting a check in the controller, can also use mongoose for validation
  if (!name || !email || !password)
    throw new BadRequestError('Please provide name, email and password.');

  const user = await User.create({ ...tempUser });
  res.status(StatusCodes.CREATED).json({ user });
};

const login = async (req, res) => {
  res.send('Login user');
};

module.exports = { register, login };
