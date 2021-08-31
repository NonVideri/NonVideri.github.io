const express = require("express");
const apiRouter = express.Router();
const {
  getAllMinions,
  createMinion,
  getMinion,
  updateMinion,
  deleteMinion
} = require("./controllers/minionsController");
const {
  getAllIdeas,
  createIdea,
  getIdea,
  updateIdea,
  deleteIdea
} = require("./controllers/ideasController");
const checkMillionDollarIdea = require("./checkMillionDollarIdea");
const { getAllMeetings, planMeeting } = require("./controllers/meetingsController");

apiRouter.route("/minions").get(getAllMinions).post(createMinion);
apiRouter.route("/minions/:minionId").get(getMinion).put(updateMinion).delete(deleteMinion);

apiRouter.route("/ideas").get(getAllIdeas).post(checkMillionDollarIdea, createIdea);
apiRouter.route("/ideas/:ideaId").get(getIdea).put(updateIdea).delete(deleteIdea);

apiRouter.route("/meetings").get(getAllMeetings).post(planMeeting);

module.exports = apiRouter;
