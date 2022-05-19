const express = require("express");
const ticketRouter = express.Router();
const createTicket = require("./controllers/ticket/createTicket");

/* domain/ticket index */

ticketRouter.post("/create", createTicket);

module.exports = ticketRouter;
