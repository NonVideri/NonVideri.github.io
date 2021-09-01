const {
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
  isNumeric
} = require("../db");

const getWork = (req, res) => {
  if (!isNumeric(req.params.minionId)) return res.sendStatus(404);
  const minion = getFromDatabaseById("minions", req.params.minionId);
  if (!minion) return res.sendStatus(404);
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

module.exports = { getWork, createWork };
