const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const errorHandler = require('errorhandler');
const helmet = require('helmet');
const apiRouter = require('./api/api');

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(errorHandler());
app.use(helmet());

app.use('/api', apiRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}...`);
});

module.exports = app;
