const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const errorHandler = require("errorhandler");
const app = express();
const PORT = process.env.PORT || 4001;
const apiRouter = require("./api/api");

app.use(express.json());
app.use(errorHandler());
app.use(cors());
app.use(morgan("dev"));

app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}...`);
});

module.exports = app;
