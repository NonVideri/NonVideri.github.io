const express = require("express");
const seriesRouter = express.Router();
const sqlite3 = require("sqlite3");
const db = new sqlite3.Database(process.env.TEST_DATABASE || "./database.sqlite");

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

module.exports = seriesRouter;
