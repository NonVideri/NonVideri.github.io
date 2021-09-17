const express = require('express');
const sqlite3 = require('sqlite3');
const employeesRouter = express.Router();
const db = new sqlite3.Database(process.env.TEST_DATABASE || './database.sqlite');
const timesheetsRouter = require('./timesheets');

employeesRouter.use('/:id/timesheets', timesheetsRouter);

const validateEmployee = (req, res, next) => {
  const newEmployee = req.body.employee;
  if (!newEmployee.name || !newEmployee.position || !newEmployee.wage) return res.sendStatus(400);
  next();
};

employeesRouter.param('id', (req, res, next, id) => {
  db.get(`SELECT * FROM Employee WHERE Employee.id = ${id}`, (err, employee) => {
    if (err) return next(err);
    if (!employee) return res.sendStatus(404);
    req.employee = employee;
    next();
  });
});

employeesRouter.get('/', (req, res, next) => {
  db.all(`SELECT * FROM Employee WHERE is_current_employee = 1`, (err, employees) => {
    if (err) return next(err);
    res.status(200).json({ employees });
  });
});

employeesRouter.get('/:id', (req, res, next) => {
  res.status(200).json({ employee: req.employee });
});

employeesRouter.post('/', validateEmployee, (req, res, next) => {
  const newEmployee = req.body.employee;
  db.run(
    `INSERT INTO Employee (name, position, wage)
    VALUES ($name, $position, $wage)`,
    {
      $name: newEmployee.name,
      $position: newEmployee.position,
      $wage: newEmployee.wage
    },
    function (err) {
      if (err) return next(err);
      db.get(`SELECT * FROM Employee WHERE Employee.id = ${this.lastID}`, (err, employee) => {
        res.status(201).json({ employee });
      });
    }
  );
});

employeesRouter.put('/:id', validateEmployee, (req, res, next) => {
  const newEmployee = req.body.employee;
  db.run(
    `UPDATE Employee SET name = $name, position = $position, wage = $wage
    WHERE Employee.id = $id`,
    {
      $name: newEmployee.name,
      $position: newEmployee.position,
      $wage: newEmployee.wage,
      $id: req.params.id
    },
    function (err) {
      if (err) return next(err);
      db.get(`SELECT * FROM Employee WHERE Employee.id = ${req.params.id}`, (err, employee) => {
        res.status(200).json({ employee });
      });
    }
  );
});

employeesRouter.delete('/:id', (req, res, next) => {
  db.run(
    `UPDATE Employee
    SET is_current_employee = 0
    WHERE Employee.id = ${req.params.id}`,
    function (err) {
      if (err) return next(err);
      req.employee.is_current_employee = 0;
      res.status(200).json({ employee: req.employee });
    }
  );
});

module.exports = employeesRouter;
