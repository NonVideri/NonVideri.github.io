// A training app using some basic Express methods to DRY the code
const express = require("express");
const app = express();

app.use(express.static("public"));

const PORT = process.env.PORT || 4001;

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const spicesRouter = require("./spicesRouter");
app.use("/spice-racks/:spiceRackId/spices", spicesRouter);

const spiceRacks = [
  {
    id: 1,
    location: "Kitchen Countertop"
  },
  {
    id: 2,
    location: "Pantry"
  },
  {
    id: 3,
    location: "Outdoor Barbecue"
  }
];

let nextSpiceRackId = spiceRacks.length + 1;

app.param("spiceRackId", (req, res, next, id) => {
  const idToFind = Number(id);
  const rackIndex = spiceRacks.findIndex(spiceRack => spiceRack.id === idToFind);
  if (rackIndex !== -1) {
    req.spiceRack = spiceRacks[rackIndex];
    req.spiceRackIndex = rackIndex;
    next();
  } else {
    res.status(404).send("Spice Rack Not Found.");
  }
});

app.get("/spice-racks/", (req, res, next) => {
  res.send(spiceRacks);
});

app.post("/spice-racks/", (req, res, next) => {
  const newRack = req.body.spiceRack;
  newRack.id = nextSpiceRackId++;
  spiceRacks.push(newRack);
  res.send(newRack);
});

app.get("/spice-racks/:spiceRackId", (req, res, next) => {
  res.send(req.spiceRack);
});

app.put("/spice-racks/:spiceRackId", (req, res, next) => {
  const updatedRack = req.body.spiceRack;
  if (req.spiceRack.id !== updatedRack.id) {
    res.status(400).send("Cannot update Spice Rack Id");
  } else {
    req.spiceRack = updatedRack;
    res.send(req.spiceRack);
  }
});

app.delete("/spice-racks/:spiceRackId", (req, res, next) => {
  spiceRacks.splice(req.spiceRackIndex, 1);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
