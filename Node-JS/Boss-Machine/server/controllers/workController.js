const {
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
  isNumeric
} = require("../db");

const getWork = (req, res) => {
  const work = getFromDatabaseById("work", req.params.minionId);
  if (work) return res.status(200).send(work);
  else res.sendStatus(404);
};

module.exports = { getWork };
