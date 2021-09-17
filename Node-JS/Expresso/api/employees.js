const express = require('express');
const sqlite3 = require('sqlite3');
const employeesRouter = express.Router();
const db = new sqlite3.Database(process.env.TEST_DATABASE || './database.sqlite');

employeesRouter.param('employeeId', (req, res, next, employeeId) => {
  db.get(`SELECT * FROM Employee WHERE Employee.id = ${employeeId}`, (err, employee) => {
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

employeesRouter.get('/:employeeId', (req, res, next) => {
  res.status(200).json({ employee: req.employee });
});

module.exports = employeesRouter;
