const {
  createMeeting,
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
  deleteAllFromDatabase
} = require("../db");

const getAllIdeas = (req, res) => {
  const ideas = getAllFromDatabase("ideas");
  if (ideas) return res.status(200).send(ideas);
  else res.sendStatus(404);
};

module.exports = {
  getAllIdeas
};
