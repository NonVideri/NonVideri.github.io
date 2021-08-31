const {
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
  isNumeric
} = require("../db");

const getAllIdeas = (req, res) => {
  const ideas = getAllFromDatabase("ideas");
  if (ideas) return res.status(200).send(ideas);
  else res.sendStatus(404);
};

const createIdea = (req, res) => {
  const idea = req.body;
  if (
    idea &&
    typeof idea.name === "string" &&
    typeof idea.description === "string" &&
    typeof idea.numWeeks === "number" &&
    typeof idea.weeklyRevenue === "number"
  ) {
    const addedIdea = addToDatabase("ideas", idea);
    res.status(201).send(addedIdea);
  }
};

const getIdea = (req, res) => {
  const id = req.params.ideaId;
  if (!typeof id === "number") return res.sendStatus(404);
  const idea = getFromDatabaseById("ideas", id);
  if (idea) return res.status(200).send(idea);
  res.sendStatus(404);
};

const updateIdea = (req, res) => {
  let idea = req.body;
  if (req.params.ideaId !== idea.id) return res.sendStatus(404);
  const updatedIdea = updateInstanceInDatabase("ideas", idea);
  if (updatedIdea) {
    res.status(201).send(updatedIdea);
    return updatedIdea;
  }
  res.sendStatus(404);
};

const deleteIdea = (req, res) => {
  const id = req.params.ideaId;
  let result = false;
  if (isNumeric(id)) result = deleteFromDatabasebyId("ideas", id);
  if (result) {
    return res.sendStatus(204);
  }
  res.sendStatus(404);
};

module.exports = {
  getAllIdeas,
  createIdea,
  getIdea,
  updateIdea,
  deleteIdea
};
