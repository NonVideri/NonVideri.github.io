const express = require("express");
const issuesRouter = express.Router({ mergeParams: true });
const sqlite3 = require("sqlite3");
const db = new sqlite3.Database(process.env.TEST_DATABASE || "./database.sqlite");

const validateIssues = (req, res, next) => {
  const issue = req.body.issue;
  if (!issue.name || !issue.issueNumber || !issue.publicationDate || !issue.artistId)
    return res.sendStatus(400);
  db.get(
    "SELECT * FROM Artist WHERE Artist.id = $artistId",
    {
      $artistId: issue.artistId
    },
    (err, artist) => {
      if (!artist) return res.sendStatus(400);
    }
  );
  next();
};

issuesRouter.get("/", (req, res, next) => {
  db.all(
    "SELECT * FROM Issue WHERE Issue.series_id = $seriesId",
    { $issuesId: req.params.seriesId },
    (err, issues) => {
      if (err) return next(err);
      res.status(200).json({ issues });
    }
  );
});

issuesRouter.post("/", validateIssues, (req, res) => {
  const issue = req.body.issue;
  db.run(
    `INSERT INTO Issue (name, issue_number, publication_date, artist_id)
    VALUES ($name, $issueNumber, $publicationDate, $artistId)`,
    {
      $name: issue.name,
      $issueNumber: issue.issueNumber,
      $publicationDate: issue.publicationDate,
      $artistId: issue.artistId
    },
    function (err) {
      if (err) return next(err);
      db.get(`SELECT * FROM Issue WHERE Issue.id = ${this.lastID}`, (err, issues) => {
        res.status(201).json({ issues });
      });
    }
  );
});

module.exports = issuesRouter;
