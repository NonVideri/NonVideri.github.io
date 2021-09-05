const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("public"));

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}...`);
});

module.exports = app;
