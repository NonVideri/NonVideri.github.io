const express = require("express");
const apiRouter = express.Router();
const { getMinions, createMinion, getOneMinion } = require("./controllers/minionsController");

apiRouter.route("/minions").get(getMinions).post(createMinion);
apiRouter.route("/minions/:minionId").get(getOneMinion);

module.exports = apiRouter;
