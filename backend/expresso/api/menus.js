const express = require('express');
const sqlite3 = require('sqlite3');
const itemsRouter = require('./menu-items');
const menusRouter = express.Router();
const db = new sqlite3.Database(process.env.TEST_DATABASE || './database.sqlite');

const validateMenu = (req, res, next) => {
  const newMenu = req.body.menu;
  if (!newMenu.title) return res.sendStatus(400);
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

menusRouter.use('/:id/menu-items', itemsRouter);

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
    `INSERT INTO Menu (title)
    VALUES ($title)`,
    {
      $title: newMenu.title
    },
    function (err) {
      if (err) return next(err);
      const menu = {
        id: this.lastID,
        title: newMenu.title
      };
      res.status(201).json({ menu });
    }
  );
});

menusRouter.put('/:id', validateMenu, (req, res, next) => {
  const newMenu = req.body.menu;
  db.run(
    `UPDATE Menu SET title = $title
    WHERE id = ${req.params.id}`,
    { $title: newMenu.title },
    (err) => {
      if (err) return next(err);
      req.menu.title = newMenu.title;
      res.status(200).json({ menu: req.menu });
    }
  );
});

menusRouter.delete('/:id', (req, res, next) => {
  db.get(`SELECT * FROM MenuItem WHERE menu_id = ${req.params.id}`, (err, menuItem) => {
    if (err) return next(err);
    if (menuItem) return res.sendStatus(400);
    db.run(`DELETE FROM Menu WHERE id = ${req.params.id}`, (err) => {
      if (err) return next(err);
      res.sendStatus(204);
    });
  });
});

module.exports = menusRouter;
