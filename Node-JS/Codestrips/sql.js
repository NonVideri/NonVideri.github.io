const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("./db.sqlite");

db.run(`CREATE TABLE Strip (
  id integer PRIMARY KEY,
  head text NOT NULL,
  body text NOT NULL,
  background text NOT NULL,
  bubble_type text NOT NULL,
  bubble_text text NOT NULL DEFAULT "",
  caption text NOT NULL DEFAULT ""
)`);
