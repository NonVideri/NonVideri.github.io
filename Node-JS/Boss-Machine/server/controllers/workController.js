const {
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId
} = require("../db");

const minionExists = minionId => {
  const minion = getFromDatabaseById("minions", minionId);
  if (minion) return true;
  return false;
};

const checkWork = (req, res, next, id) => {
  const work = getFromDatabaseById("work", id);
  if (!work) return res.sendStatus(404);
  next();
};

const getWork = (req, res) => {
  if (!minionExists(req.params.minionId)) return res.sendStatus(404);
  const work = getAllFromDatabase("work");
  const minionWork = work.filter(i => i.minionId === req.params.minionId);
  if (minionWork) return res.status(200).send(minionWork);
  res.sendStatus(404);
};

const createWork = (req, res) => {
  const work = req.body;
  if (
    typeof work.title === "string" &&
    typeof work.description === "string" &&
    typeof work.hours === "number" &&
    typeof work.minionId === "string"
  ) {
    const newWork = addToDatabase("work", work);
    res.status(201).send(newWork);
  }
};

const updateWork = (req, res) => {
  if (!minionExists(req.params.minionId)) return res.sendStatus(404);
  const work = req.body;
  if (!minionExists(work.minionId)) return res.sendStatus(400);
  if (
    typeof work.id === "string" &&
    typeof work.title === "string" &&
    typeof work.description === "string" &&
    typeof work.hours === "number" &&
    typeof work.minionId === "string"
  ) {
    const updatedWork = updateInstanceInDatabase("work", work);
    res.status(201).send(updatedWork);
  }
};

const deleteWork = (req, res) => {
  const deleted = deleteFromDatabasebyId("work", req.params.workId);
  if (deleted) return res.sendStatus(204);
  res.sendStatus(404);
};

module.exports = { checkWork, getWork, createWork, updateWork, deleteWork };
