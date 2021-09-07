const express = require("express");
const artistsRouter = express.Router();
const sqlite3 = require("sqlite3");
const db = new sqlite3.Database(process.env.TEST_DATABASE || "./database.sqlite");

artistsRouter.param("artistId", (req, res, next, artistId) => {
  db.get(`SELECT * FROM Artist WHERE Artist.id = ${artistId}`, (err, artist) => {
    if (err) return next(err);
    if (!artist) return res.sendStatus(404);
    req.artist = artist;
    next();
  });
});

artistsRouter.get("/", (req, res, next) => {
  db.all("SELECT * FROM Artist WHERE Artist.is_currently_employed = 1", (err, artists) => {
    if (err) return next(err);
    res.status(200).json({ artists });
  });
});

artistsRouter.get("/:artistId", (req, res) => {
  res.status(200).send({ artist: req.artist });
});

module.exports = artistsRouter;
