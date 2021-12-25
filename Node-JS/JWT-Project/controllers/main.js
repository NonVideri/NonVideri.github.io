// check username, password in login request
// if exist and match create new JWT
// send back to front-end
// setup authentication so only the request with JWT can access the dashboard
const jwt = require('jsonwebtoken');
const { BadRequestError } = require('../errors');

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) throw new BadRequestError('You need to provide email and password.');
  // Dummy data
  const id = new Date().getDate();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, { expiresIn: '30d' });
  res.status(200).json({ msg: 'User created.', token });
};

const dashboard = async (req, res) => {
  const { username } = req.user;

  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello, ${username}.`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}.`
  });
};

module.exports = { login, dashboard };
