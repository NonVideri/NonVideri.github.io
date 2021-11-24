require('dotenv').config();
// async errors
const express = require('express');
const connectDB = require('./db/connect');
const errorHandlerMiddleware = require('./middleware/error-handler');
const notFoundMiddleware = require('./middleware/not-found');

const app = express();

// middleware
app.use(express.json());

// routes
app.get('/', (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products">Products Route</a>');
});

// Products route

// error handling
app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

// launch app
const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, console.log(`Server is listening at port ${PORT}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
