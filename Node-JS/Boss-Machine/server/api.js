const express = require("express");
const apiRouter = express.Router();
const workRouter = express.Router({ mergeParams: true });
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
const {
  getAllMeetings,
  planMeeting,
  deleteAllMeetings
} = require("./controllers/meetingsController");
const {
  checkWork,
  getWork,
  createWork,
  updateWork,
  deleteWork
} = require("./controllers/workController");

apiRouter.route("/minions").get(getAllMinions).post(createMinion);
apiRouter.route("/minions/:minionId").get(getMinion).put(updateMinion).delete(deleteMinion);

apiRouter.route("/ideas").get(getAllIdeas).post(checkMillionDollarIdea, createIdea);
apiRouter.route("/ideas/:ideaId").get(getIdea).put(updateIdea).delete(deleteIdea);

apiRouter.route("/meetings").get(getAllMeetings).post(planMeeting).delete(deleteAllMeetings);

apiRouter.use("/minions/:minionId/work", workRouter);

workRouter.param("workId", checkWork);
workRouter.route("/").get(getWork).post(createWork);
workRouter.route("/:workId").put(updateWork).delete(deleteWork);

module.exports = apiRouter;
