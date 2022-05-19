/* EXPRESS.JS - SERVER */
const express = require("express");
/* COLORS.JS FOR CONSOLE COLORING */
const colors = require("colors");
/* DOTENV.JS FOR ENVIRONMENT VARIABLES */
const dotenv = require("dotenv").config();
/* MONGOOSE FOR DATABASE */
const mongoose = require("mongoose");
const dbConnect = require("./db.js")(); // Run DB connect function
/* Express ASYNC Handler */
const eAH = require("express-async-handler");

/* Routers */
const userRouter = require("./routers/userRouter");
const ticketRouter = require("./routers/ticketRouter");
const ticketsRouter = require("./routers/ticketsRouter");

const port = process.env.APP_PORT || 5000;

const app = express();

/* MIDDLEWARE */

app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use("/users", userRouter);
app.use("/ticket", ticketRouter);
app.use("/tickets", ticketsRouter);

/*
OPEN PORT AND START BACKEND SERVER
*/

app.listen(port, () => {
  console.log(`Listening on port ${port}`.rainbow);
});
