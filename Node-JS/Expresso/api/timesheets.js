const express = require('express');
const sqlite3 = require('sqlite3');
const timesheetsRouter = express.Router({ mergeParams: true });
const db = new sqlite3.Database(process.env.TEST_DATABASE || './database.sqlite');

timesheetsRouter.get('/', (req, res, next) => {
  db.all(`SELECT * FROM Timesheet WHERE employee_id = ${req.params.id}`, (err, timesheets) => {
    if (err) return next(err);
    res.status(200).json({ timesheets });
  });
});

module.exports = timesheetsRouter;
