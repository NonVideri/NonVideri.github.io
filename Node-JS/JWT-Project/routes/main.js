const express = require('express');
const { dashboard, login } = require('../controllers/main');
const mainRouter = express.Router();

mainRouter.route('/dashboard').get(dashboard);
mainRouter.route('/login').post(login);

module.exports = mainRouter;
