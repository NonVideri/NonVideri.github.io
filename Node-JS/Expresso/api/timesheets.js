const express = require('express');
const sqlite3 = require('sqlite3');
const timesheetsRouter = express.Router({ mergeParams: true });
const db = new sqlite3.Database(process.env.TEST_DATABASE || './database.sqlite');

const validateTimesheet = (req, res, next) => {
  const newTimesheet = req.body.timesheet;
  if (!newTimesheet.hours || !newTimesheet.rate || !newTimesheet.date) return res.sendStatus(400);
  next();
};

timesheetsRouter.get('/', (req, res, next) => {
  db.all(`SELECT * FROM Timesheet WHERE employee_id = ${req.params.id}`, (err, timesheets) => {
    if (err) return next(err);
    res.status(200).json({ timesheets });
  });
});

timesheetsRouter.post('/', validateTimesheet, (req, res, next) => {
  const newTimesheet = req.body.timesheet;
  db.run(
    `INSERT INTO Timesheet (hours, rate, date, employee_id)
  VALUES ($hours, $rate, $date, $employee_id)`,
    {
      $hours: newTimesheet.hours,
      $rate: newTimesheet.rate,
      $date: newTimesheet.date,
      $employee_id: req.params.id
    },
    function (err) {
      if (err) return next(err);
      db.get(`SELECT * FROM Timesheet WHERE id = ${this.lastID}`, (err, timesheet) => {
        if (err) return next(err);
        res.status(201).json({ timesheet });
      });
    }
  );
});

module.exports = timesheetsRouter;
