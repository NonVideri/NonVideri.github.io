const express = require("express");
const apiRouter = express.Router();
const { getMinions } = require("./controllers/minionsController");

apiRouter.route("/minions").get(getMinions);

module.exports = apiRouter;
