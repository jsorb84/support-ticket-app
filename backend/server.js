const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const port = process.env.APP_PORT || 5000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`.rainbow);
});
