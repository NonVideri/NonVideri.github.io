const express = require('express');
const { dashboard, login } = require('../controllers/main');
const authMiddleware = require('../middleware/auth');
const mainRouter = express.Router();

mainRouter.route('/dashboard').get(authMiddleware, dashboard);
mainRouter.route('/login').post(login);

module.exports = mainRouter;
