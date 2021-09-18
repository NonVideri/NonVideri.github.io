const express = require('express');
const sqlite3 = require('sqlite3');
const itemsRouter = express.Router({ mergeParams: true });
const db = new sqlite3.Database(process.env.TEST_DATABASE || './database.sqlite');

const validateItem = (req, res, next) => {
  const newItem = req.body.menuItem;
  if (!newItem.name || !newItem.inventory || !newItem.price) return res.sendStatus(400);
  next();
};

itemsRouter.get('/', (req, res, next) => {
  db.all(`SELECT * FROM MenuItem WHERE menu_id = ${req.params.id}`, (err, menuItems) => {
    if (err) return next(err);
    res.status(200).json({ menuItems });
  });
});

itemsRouter.post('/', validateItem, (req, res, next) => {
  const newItem = req.body.menuItem;
  db.run(
    `INSERT INTO MenuItem (name, description, inventory, price, menu_id)
    VALUES ($name, $description, $inventory, $price, $menu_id)`,
    {
      $name: newItem.name,
      $description: newItem.description,
      $inventory: newItem.inventory,
      $price: newItem.price,
      $menu_id: req.params.id
    },
    function (err) {
      if (err) return next(err);
      const menuItem = {
        id: this.lastID,
        name: newItem.name,
        description: newItem.description,
        inventory: newItem.inventory,
        price: newItem.price,
        menu_id: Number(req.params.id)
      };
      res.status(201).json({ menuItem });
    }
  );
});

module.exports = itemsRouter;
