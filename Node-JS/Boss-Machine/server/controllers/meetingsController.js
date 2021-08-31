const {
  createMeeting,
  getAllFromDatabase,
  addToDatabase,
  deleteAllFromDatabase
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

const deleteAllMeetings = (req, res) => {
  const cleanSchedule = deleteAllFromDatabase("meetings");
  res.status(204).send(cleanSchedule);
};

module.exports = { getAllMeetings, planMeeting, deleteAllMeetings };
