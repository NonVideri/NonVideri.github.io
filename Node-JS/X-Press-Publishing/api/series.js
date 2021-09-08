const express = require("express");
const seriesRouter = express.Router();
const sqlite3 = require("sqlite3");
const db = new sqlite3.Database(process.env.TEST_DATABASE || "./database.sqlite");

const validateSeries = (req, res, next) => {
  const newSeries = req.body.series;
  if (!newSeries.name || !newSeries.description) return res.sendStatus(400);
  else next();
};

seriesRouter.param("seriesId", (req, res, next, seriesId) => {
  db.get(`SELECT * FROM Series WHERE Series.id = ${seriesId}`, (err, series) => {
    if (err) return next(err);
    if (!series) return res.sendStatus(404);
    req.series = series;
    next();
  });
});

seriesRouter.get("/", (req, res, next) => {
  db.all("SELECT * FROM Series", (err, series) => {
    if (err) return next(err);
    res.status(200).json({ series });
  });
});

seriesRouter.get("/:seriesId", (req, res) => {
  res.status(200).json({ series: req.series });
});

seriesRouter.post("/", validateSeries, (req, res) => {
  const newSeries = req.body.series;
  db.run(
    `INSERT INTO Series (name, description)
    VALUES ($name, $description)`,
    {
      $name: newSeries.name,
      $description: newSeries.description
    },
    function (err) {
      if (err) return next(err);
      db.get(`SELECT * FROM Series WHERE Series.id = ${this.lastID}`, (err, series) => {
        res.status(201).json({ series });
      });
    }
  );
});

seriesRouter.put("/:seriesId", validateSeries, (req, res) => {
  const series = req.body.series;
  db.run(
    `UPDATE Series SET
  name = $name,
  description = $description
  WHERE Series.id = $seriesId`,
    {
      $name: series.name,
      $description: series.description,
      $seriesId: req.params.seriesId
    },
    function (err) {
      if (err) return next(err);
      db.get(`SELECT * FROM Series WHERE Series.id = ${req.params.seriesId}`, (err, series) => {
        res.status(200).json({ series });
      });
    }
  );
});

module.exports = seriesRouter;
