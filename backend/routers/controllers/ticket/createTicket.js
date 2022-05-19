/* 
@_METHOD POST
@_PATH ./ticket/create
@_RETURN NEW CREATED TICKET
@_ACCESS PRIVATE - MUST BE LOGGED IN 
*/

const mongoose = require("mongoose");
const Ticket = require("../../../models/ticketModel");
const User = require("../../../models/userModel");
const asyncHandler = require("express-async-handler");

const createTicket = asyncHandler(async (req, res) => {
  const { body, author } = req.body;

  if (!body || !author) {
    return res.status(400).json({
      error: "Required information is missing",
    });
  }
  const { _id, email } = author;
  // User will always be valid since we're the only one ever sending the body
  // and so we do not need to validate the passed author
  const newTicket = await Ticket.create({
    body: body,
    author: _id,
  });
  // Make sure the new ticket was successfully created
  if (!newTicket) {
    return res.status(500).json({
      error: "New ticket not created successfully",
    });
  }
  return res.status(201).json(newTicket);
});

module.exports = createTicket;
