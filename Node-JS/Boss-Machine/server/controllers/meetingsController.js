const {
  createMeeting,
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
  deleteAllFromDatabase,
  isNumeric
} = require("../db");

const getAllMeetings = (req, res) => {
  const meetings = getAllFromDatabase("meetings");
  if (meetings) return res.status(200).send(meetings);
  else res.sendStatus(404);
};

module.exports = { getAllMeetings };
