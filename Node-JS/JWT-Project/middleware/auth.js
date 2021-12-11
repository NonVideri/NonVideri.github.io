const jwt = require('jsonwebtoken');
const CustomAPIError = require('../errors/custom-error');

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer '))
    throw new CustomAPIError('You need to provide a valid token.', 401);

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decoded;
    req.user = { id, username };
    next();
  } catch (error) {
    throw new CustomAPIError('Invalid token.', 401);
  }
};

module.exports = authMiddleware;
