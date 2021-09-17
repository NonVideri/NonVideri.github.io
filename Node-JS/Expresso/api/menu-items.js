const express = require('express');
const sqlite3 = require('sqlite3');
const menuItemsRouter = express.Router({ mergeParams: true });
const db = new sqlite3.Database(process.env.TEST_DATABASE || './database.sqlite');

menuItemsRouter.get('/', (req, res, next) => {
  db.all(`SELECT * FROM MenuItem WHERE menu_id = ${req.params.id}`, (err, menuItems) => {
    if (err) return next(err);
    res.status(200).json({ menuItems });
  });
});

module.exports = menuItemsRouter;
