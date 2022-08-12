const {
  createMeeting,
  getAllFromDatabase,
  addToDatabase,
  deleteAllFromDatabase
} = require("../db");

const getAllMeetings = (req, res) => {
  const meetings = getAllFromDatabase("meetings");
  if (meetings) res.status(200).send(meetings);
};

const planMeeting = (req, res) => {
  const meeting = createMeeting();
  const addedMeeting = addToDatabase("meetings", meeting);
  if (addedMeeting) res.status(201).send(addedMeeting);
};

const deleteAllMeetings = (req, res) => {
  const cleanSchedule = deleteAllFromDatabase("meetings");
  if (cleanSchedule.length === 0) res.status(204).send(cleanSchedule);
};

module.exports = { getAllMeetings, planMeeting, deleteAllMeetings };
