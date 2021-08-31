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
  if (minions) {
    return res.status(200).send(minions);
  }
  res.sendStatus(404);
};

module.exports = {
  getMinions
};
