const express = require("express");
const issuesRouter = express.Router({ mergeParams: true });
const sqlite3 = require("sqlite3");
const db = new sqlite3.Database(process.env.TEST_DATABASE || "./database.sqlite");

const validateIssue = (req, res, next) => {
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

issuesRouter.param("issueId", (req, res, next, issueId) => {
  db.get(`SELECT * FROM Issue WHERE Issue.id = ${issueId}`, (err, issue) => {
    if (err) return next(err);
    if (!series) return res.sendStatus(404);
    req.issue = issue;
    next();
  });
});

issuesRouter.get("/", (req, res, next) => {
  db.all(
    "SELECT * FROM Issue WHERE Issue.series_id = $seriesId",
    { $issuesId: req.params.seriesId },
    (err, issue) => {
      if (err) return next(err);
      res.status(200).json({ issue });
    }
  );
});

issuesRouter.post("/", validateIssue, (req, res) => {
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
      db.get(`SELECT * FROM Issue WHERE Issue.id = ${this.lastID}`, (err, issue) => {
        res.status(201).json({ issue });
      });
    }
  );
});

issuesRouter.put("/:issueId", validateIssue, (req, res) => {
  const issue = req.body.issue;
  db.run(
    `UPDATE Issue SET
    name = $name, issue_number = $issueNumber, publication_date = $publicationDate, artist_id = $artistId`,
    {
      $name: issue.name,
      $issueNumber: issue.issueNumber,
      $publicationDate: issue.publicationDate,
      $artistId: issue.artistId
    },
    function (err) {
      if (err) return next(err);
      db.get(`SELECT * FROM Issue WHERE Issue.id = ${this.lastID}`, (err, issue) => {
        res.status(201).json({ issue });
      });
    }
  );
});

module.exports = issuesRouter;
