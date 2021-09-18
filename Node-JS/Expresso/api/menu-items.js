const express = require('express');
const sqlite3 = require('sqlite3');
const itemsRouter = express.Router({ mergeParams: true });
const db = new sqlite3.Database(process.env.TEST_DATABASE || './database.sqlite');

const validateItem = (req, res, next) => {
  const newItem = req.body.menuItem;
  if (!newItem.name || !newItem.inventory || !newItem.price) return res.sendStatus(400);
  next();
};

itemsRouter.param('itemId', (req, res, next, id) => {
  db.get(`SELECT * FROM MenuItem WHERE id = ${id}`, (err, item) => {
    if (err) return next(err);
    if (!item) return res.sendStatus(404);
    req.item = item;
    next();
  });
});

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

itemsRouter.put('/:itemId', validateItem, (req, res, next) => {
  const newItem = req.body.menuItem;
  db.run(
    `UPDATE MenuItem SET name = $name, description = $description, inventory = $inventory, price = $price
    WHERE id = ${req.params.itemId}`,
    {
      $name: newItem.name,
      $description: newItem.description,
      $inventory: newItem.inventory,
      $price: newItem.price
    },
    (err) => {
      if (err) return next(err);
      [req.item.name, req.item.description, req.item.inventory, req.item.price] = [
        newItem.name,
        newItem.description,
        newItem.inventory,
        newItem.price
      ];
      res.status(200).json({ menuItem: req.item });
    }
  );
});

module.exports = itemsRouter;
