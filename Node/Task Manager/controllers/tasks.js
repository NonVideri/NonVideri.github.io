const Task = require("../models/Task");

const getAllTasks = (req, res) => {
  res.send("All tasks.");
};
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};
const getTask = (req, res) => {
  res.send("Get single task.");
};
const updateTask = (req, res) => {
  res.send("Update task.");
};
const deleteTask = (req, res) => {
  res.send("Delete task.");
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
};
