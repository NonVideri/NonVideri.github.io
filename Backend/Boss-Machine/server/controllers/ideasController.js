const {
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId
} = require("../db");

const getAllIdeas = (req, res) => {
  const ideas = getAllFromDatabase("ideas");
  if (ideas) res.status(200).send(ideas);
};

const createIdea = (req, res) => {
  const idea = req.body;
  if (
    typeof idea.name === "string" &&
    typeof idea.description === "string" &&
    typeof idea.numWeeks === "number" &&
    typeof idea.weeklyRevenue === "number"
  ) {
    const newIdea = addToDatabase("ideas", idea);
    res.status(201).send(newIdea);
  }
};

const getIdea = (req, res) => {
  const idea = getFromDatabaseById("ideas", req.params.ideaId);
  if (idea) return res.status(200).send(idea);
  res.sendStatus(404);
};

const updateIdea = (req, res) => {
  let idea = req.body;
  if (req.params.ideaId !== idea.id) return res.sendStatus(404);
  const updatedIdea = updateInstanceInDatabase("ideas", idea);
  if (updatedIdea) return res.status(201).send(updatedIdea);
  res.sendStatus(404);
};

const deleteIdea = (req, res) => {
  const deleted = deleteFromDatabasebyId("ideas", req.params.ideaId);
  if (deleted) return res.sendStatus(204);
  res.sendStatus(404);
};

module.exports = {
  getAllIdeas,
  createIdea,
  getIdea,
  updateIdea,
  deleteIdea
};
