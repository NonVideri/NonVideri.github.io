const express = require("express");
const app = express();
const morgan = require("morgan");
const sqlite3 = require("sqlite3");
const db = new sqlite3.Database(process.env.TEST_DATABASE || "./db.sqlite");

app.use(express.static("public"));
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.get("/strips", (req, res) => {
  db.all("SELECT * FROM Strip", (err, rows) => {
    if (err) return console.log(err);
    if (rows) return res.status(200).send({ strips: rows });
    res.sendStatus(404);
  });
});

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}...`);
});

module.exports = app;
