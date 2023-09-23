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
  db.get(`SELECT * FROM Issue WHERE Issue.id = $issueId`, { $issueId: issueId }, (err, issue) => {
    if (err) return next(err);
    if (!issue) return res.sendStatus(404);
    req.issue = issue;
    next();
  });
});

issuesRouter.get("/", (req, res, next) => {
  db.all(
    "SELECT * FROM Issue WHERE Issue.series_id = $seriesId",
    { $seriesId: req.params.seriesId },
    (err, issues) => {
      if (err) return next(err);
      res.status(200).json({ issues });
    }
  );
});

issuesRouter.post("/", validateIssue, (req, res, next) => {
  const issue = req.body.issue;
  db.run(
    `INSERT INTO Issue (name, issue_number, publication_date, artist_id, series_id)
    VALUES ($name, $issueNumber, $publicationDate, $artistId, $seriesId)`,
    {
      $name: issue.name,
      $issueNumber: issue.issueNumber,
      $publicationDate: issue.publicationDate,
      $artistId: issue.artistId,
      $seriesId: req.params.seriesId
    },
    function (err) {
      if (err) return next(err);
      db.get(`SELECT * FROM Issue WHERE Issue.id = ${this.lastID}`, (err, issue) => {
        res.status(201).json({ issue });
      });
    }
  );
});

issuesRouter.put("/:issueId", validateIssue, (req, res, next) => {
  const issue = req.body.issue;
  db.run(
    `UPDATE Issue SET
    name = $name, issue_number = $issueNumber,
    publication_date = $publicationDate, artist_id = $artistId
    WHERE Issue.id = $issueId`,
    {
      $name: issue.name,
      $issueNumber: issue.issueNumber,
      $publicationDate: issue.publicationDate,
      $artistId: issue.artistId,
      $issueId: req.params.issueId
    },
    function (err) {
      if (err) return next(err);
      db.get(`SELECT * FROM Issue WHERE Issue.id = ${req.params.issueId}`, (err, issue) => {
        res.status(200).json({ issue });
      });
    }
  );
});

issuesRouter.delete("/:issueId", (req, res, next) => {
  db.run(
    `DELETE FROM Issue
    WHERE Issue.id = $issueId`,
    { $issueId: req.params.issueId },
    err => {
      if (err) return next(err);
      res.sendStatus(204);
    }
  );
});

module.exports = issuesRouter;
