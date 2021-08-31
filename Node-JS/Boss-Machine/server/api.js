const express = require("express");
const apiRouter = express.Router();
const { getMinions, createMinion } = require("./controllers/minionsController");

apiRouter.route("/minions").get(getMinions).post(createMinion);

module.exports = apiRouter;
