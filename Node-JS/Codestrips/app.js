const express = require("express");
const app = express();
const morgan = require("morgan");
const sqlite3 = require("sqlite3");
const db = new sqlite3.Database(process.env.TEST_DATABASE || "./db.sqlite");

app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("public"));

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}...`);
});

module.exports = app;
