require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
const authRouter = require('./routes/auth');
const jobsRouter = require('./routes/jobs');
const connectDB = require('./db/connect');

// error handlers
const notFoundMW = require('./middleware/not-found');
const errorHandlerMW = require('./middleware/error-handler');
const authenticationMW = require('./middleware/authentication');

app.use(express.json());
// extra packages

// routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', authenticationMW, jobsRouter);

app.use(notFoundMW);
app.use(errorHandlerMW);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
