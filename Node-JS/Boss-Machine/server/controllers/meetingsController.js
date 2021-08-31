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

const planMeeting = (req, res) => {
  const meeting = createMeeting();
  const addedMeeting = addToDatabase("meetings", meeting);
  res.status(201).send(addedMeeting);
};

module.exports = { getAllMeetings, planMeeting };
