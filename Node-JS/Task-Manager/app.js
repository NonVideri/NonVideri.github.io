const express = require('express');
const app = express();
const connectDB = require('./db/connect');
require('dotenv').config();

const notFound = require('./middleware/not-found');
const errorHandler = require('./middleware/error-handler');
const tasks = require('./routes/tasks');

// Middleware
app.use(express.static('./public'));
app.use(express.json());

// Routes
app.use('/api/v1/tasks', tasks);
app.use(notFound); // Default used if another route is used
app.use(errorHandler);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`The server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
