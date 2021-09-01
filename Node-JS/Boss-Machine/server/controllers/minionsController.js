const {
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId
} = require("../db");

const getAllMinions = (req, res) => {
  const minions = getAllFromDatabase("minions");
  if (minions) return res.status(200).send(minions);
};

const createMinion = (req, res) => {
  const minion = req.body;
  if (
    typeof minion.name === "string" &&
    typeof minion.title === "string" &&
    typeof minion.salary === "number"
  ) {
    const newMinion = addToDatabase("minions", minion);
    res.status(201).send(newMinion);
  }
};

const getMinion = (req, res) => {
  const minion = getFromDatabaseById("minions", req.params.minionId);
  if (minion) return res.status(200).send(minion);
  res.sendStatus(404);
};

const updateMinion = (req, res) => {
  let minion = req.body;
  if (req.params.minionId !== minion.id) return res.sendStatus(404);
  const updatedMinion = updateInstanceInDatabase("minions", minion);
  if (updatedMinion) return res.status(201).send(updatedMinion);
  res.sendStatus(404);
};

const deleteMinion = (req, res) => {
  const deleted = deleteFromDatabasebyId("minions", req.params.minionId);
  if (deleted) return res.sendStatus(204);
  res.sendStatus(404);
};

module.exports = {
  getAllMinions,
  createMinion,
  getMinion,
  updateMinion,
  deleteMinion
};
