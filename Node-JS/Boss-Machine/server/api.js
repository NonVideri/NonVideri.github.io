const express = require("express");
const apiRouter = express.Router();
const {
  getAllMinions,
  createMinion,
  getMinion,
  updateMinion,
  deleteMinion
} = require("./controllers/minionsController");
const { getAllIdeas } = require("./controllers/ideasController");

apiRouter.route("/minions").get(getAllMinions).post(createMinion);
apiRouter.route("/minions/:minionId").get(getMinion).put(updateMinion).delete(deleteMinion);

apiRouter.route("/ideas").get(getAllIdeas);

module.exports = apiRouter;
