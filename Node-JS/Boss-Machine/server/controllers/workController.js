const {
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
  isNumeric
} = require("../db");

const minionExists = minionId => {
  if (!isNumeric(minionId)) return false;
  const minion = getFromDatabaseById("minions", minionId);
  if (minion) return true;
  return false;
};

const checkWork = (req, res, next, id) => {
  if (!isNumeric(id)) return res.sendStatus(404);
  const work = getFromDatabaseById("work", id);
  if (!work) return res.sendStatus(404);
  next();
};

const getWork = (req, res) => {
  if (!minionExists(req.params.minionId)) return res.sendStatus(404);
  const work = getAllFromDatabase("work");
  const minionWork = work.filter(i => i.minionId === req.params.minionId);
  if (minionWork) return res.status(200).send(minionWork);
  return res.sendStatus(404);
};

const createWork = (req, res) => {
  const work = req.body;
  if (
    typeof work.title === "string" &&
    typeof work.description === "string" &&
    typeof work.hours === "number" &&
    typeof work.minionId === "string"
  ) {
    addToDatabase("work", work);
    res.status(201).send(work);
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
    console.log(updatedWork);
    return res.status(201).send(updatedWork);
  }
};

const deleteWork = (req, res) => {
  const result = deleteFromDatabasebyId("work", req.params.workId);
  if (result) return res.sendStatus(204);
};

module.exports = { checkWork, getWork, createWork, updateWork, deleteWork };
