const jwt = require('jsonwebtoken');
const { UnauthenticatedError } = require('../errors');

// Verify the authorizing token
const authenticationMW = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer '))
    throw new UnauthenticatedError('Invalid authentication.');

  const token = authHeader.split(' ')[1];

  try {
    const { userId, name } = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId, name };
    next();
  } catch (error) {
    throw new UnauthenticatedError('Invalid authentication.');
  }
};

module.exports = authenticationMW;
