const express = require("express");
require("./db");
const bodyParser = require("body-parser");
const apiGame = require("./routes/game");

const morgan = require("morgan");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use("/game", apiGame);

const { PORT } = process.env;
app.listen(PORT, () => {
  console.log(`Serever running on port ${PORT}`);
});

module.exports = app;
