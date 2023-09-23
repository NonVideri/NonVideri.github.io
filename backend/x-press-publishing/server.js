const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const errorHandler = require('errorhandler');
const helmet = require('helmet');
const app = express();
const apiRouter = require('./api/api');

app.use(express.json());
app.use(errorHandler());
app.use(cors());
app.use(morgan('dev'));
app.use(helmet());

app.use('/api', apiRouter);

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}...`);
});

module.exports = app;
