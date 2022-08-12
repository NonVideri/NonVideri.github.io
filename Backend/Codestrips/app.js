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

const validateStrip = (req, res, next) => {
  const newStrip = req.body.strip;
  if (!newStrip.head || !newStrip.body || !newStrip.background || !newStrip.bubbleType) {
    return res.sendStatus(400);
  }
  next();
};

app.post("/strips", validateStrip, (req, res) => {
  const newStrip = req.body.strip;
  db.run(
    `INSERT INTO Strip (head, body, background, bubble_type, bubble_text, caption)
  VALUES ($head, $body, $background, $bubbleType, $bubbleText,
    $caption)`,
    {
      $head: newStrip.head,
      $body: newStrip.body,
      $bubbleType: newStrip.bubbleType,
      $background: newStrip.background,
      $bubbleText: newStrip.bubbleText,
      $caption: newStrip.caption
    },
    function (err) {
      if (err) return res.sendStatus(500);
      db.get(`SELECT * FROM Strip WHERE id = ${this.lastID}`, (err, row) => {
        if (!row) return res.sendStatus(500);
        res.status(201).send({ strip: row });
      });
    }
  );
});

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}...`);
});

module.exports = app;
