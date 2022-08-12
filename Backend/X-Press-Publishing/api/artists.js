const express = require("express");
const artistsRouter = express.Router();
const sqlite3 = require("sqlite3");
const db = new sqlite3.Database(process.env.TEST_DATABASE || "./database.sqlite");

const validateArtist = (req, res, next) => {
  const newArtist = req.body.artist;
  if (!newArtist.name || !newArtist.dateOfBirth || !newArtist.biography) return res.sendStatus(400);
  else next();
};

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

artistsRouter.post("/", validateArtist, (req, res, next) => {
  const newArtist = req.body.artist;
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
        res.status(201).json({ artist });
      });
    }
  );
});

artistsRouter.put("/:artistId", validateArtist, (req, res, next) => {
  const artist = req.body.artist;
  db.run(
    `UPDATE Artist SET
  name = $name,
  date_of_birth = $dateOfBirth,
  biography = $biography,
  is_currently_employed = $isCurrentlyEmployed
  WHERE Artist.id = $artistId`,
    {
      $name: artist.name,
      $dateOfBirth: artist.dateOfBirth,
      $biography: artist.biography,
      $isCurrentlyEmployed: artist.isCurrentlyEmployed,
      $artistId: req.params.artistId
    },
    function (err) {
      if (err) return next(err);
      db.get(`SELECT * FROM Artist WHERE Artist.id = ${req.params.artistId}`, (err, artist) => {
        res.status(200).json({ artist });
      });
    }
  );
});

artistsRouter.delete("/:artistId", (req, res, next) => {
  db.run(
    `UPDATE Artist SET
  is_currently_employed = 0
  WHERE Artist.id = $artistId`,
    { $artistId: req.params.artistId },
    err => {
      if (err) return next(err);
      db.get(`SELECT * FROM Artist WHERE Artist.id = ${req.params.artistId}`, (err, artist) => {
        res.status(200).json({ artist });
      });
    }
  );
});

module.exports = artistsRouter;
