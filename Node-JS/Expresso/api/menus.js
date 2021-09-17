const express = require('express');
const sqlite3 = require('sqlite3');
const menusRouter = express.Router();
const db = new sqlite3.Database(process.env.TEST_DATABASE || './database.sqlite');

const validateMenu = (req, res, next) => {
  const newMenu = req.body.menu;
  if (!newMenu.text) return res.sendStatus(400);
  next();
};

menusRouter.param('id', (req, res, next, id) => {
  db.get(`SELECT * FROM Menu WHERE id = ${id}`, (err, menu) => {
    if (err) return next(err);
    if (!menu) return res.sendStatus(404);
    req.menu = menu;
    next();
  });
});

menusRouter.get('/', (req, res, next) => {
  db.all(`SELECT * FROM Menu`, (err, menus) => {
    if (err) return next(err);
    res.status(200).json({ menus });
  });
});

menusRouter.get('/:id', (req, res, next) => {
  res.status(200).json({ menu: req.menu });
});

menusRouter.post('/', validateMenu, (req, res, next) => {
  const newMenu = req.body.menu;
  db.run(
    `INSERT INTO Menu (text)
    VALUES ($text)`,
    {
      $text: newMenu.text
    },
    function (err) {
      if (err) return next(err);
      db.get(`SELECT * FROM Menu WHERE id = ${this.lastID}`, (err, menu) => {
        res.status(201).json({ menu });
      });
    }
  );
});

module.exports = menusRouter;
