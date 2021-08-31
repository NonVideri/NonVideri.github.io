const {
  createMeeting,
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
  deleteAllFromDatabase
} = require("../db");

const getMinions = (req, res) => {
  const minions = getAllFromDatabase("minions");
  if (minions) return res.status(200).send(minions);
  else res.sendStatus(404);
};

const createMinion = (req, res) => {
  const minion = req.body;
  if (
    minion &&
    typeof minion.name === "string" &&
    typeof minion.title === "string" &&
    typeof minion.salary === "number"
  ) {
    const addedMinion = addToDatabase("minions", minion);
    res.status(201).send(addedMinion);
  }
};

const getOneMinion = (req, res) => {
  const id = req.params.minionId;
  if (!typeof id === "number") return res.sendStatus(404);
  const minion = getFromDatabaseById("minions", id);
  if (minion) return res.status(200).send(minion);
  res.sendStatus(404);
};

module.exports = {
  getMinions,
  createMinion,
  getOneMinion
};