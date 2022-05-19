const express = require("express");
const ticketsRouter = express.Router();
const getUserTickets = require("./controllers/tickets/getUserTickets");

/* domain/tickets index */

ticketsRouter.get("/byUser/:userid", getUserTickets);

module.exports = ticketsRouter;
