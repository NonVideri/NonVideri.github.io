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
  res.status(200).json({ artist: req.artist });
});

artistsRouter.post("/", (req, res) => {
  const newArtist = req.body.artist;
  if (!newArtist.name || !newArtist.dateOfBirth || !newArtist.biography) return res.sendStatus(400);
  if (newArtist.isCurrentlyEmployed !== 0) newArtist.isCurrentlyEmployed = 1;
  db.run(
    `INSERT INTO Artist (name, date_of_birth, biography, is_currently_employed)
    VALUES ($name, $dateOfBirth, $biography, $isCurrentlyEmployed)`,
    {
      $name: newArtist.name,
      $dateOfBirth: newArtist.dateOfBirth,
      $biography: newArtist.biography,
      $isCurrentlyEmployed: newArtist.isCurrentlyEmployed
    },
    function (err) {
      if (err) return next(err);
      db.get(`SELECT * FROM Artist WHERE Artist.id = ${this.lastID}`, (err, artist) => {
        console.log(artist);
        res.status(201).json({ artist });
      });
    }
  );
});

module.exports = artistsRouter;
