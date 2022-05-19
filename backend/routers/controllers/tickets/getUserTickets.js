/* 
@_METHOD GET
@_PATH ./tickets/byUser/:userid
@_RETURN ALL TICKETS BY A CERTAIN USER
@_ACCESS PRIVATE - MUST BE LOGGED IN IF REQ.USER == AUTHOR
    MUST BE ADMIN IS REQ.USER !== AUTHOR
*/

const mongoose = require("mongoose");
const Ticket = require("../../../models/ticketModel");
const User = require("../../../models/userModel");
const asyncHandler = require("express-async-handler");

const getUserTickets = asyncHandler(async (req, res) => {
  const { userid } = req.params;

  // Check to see if the id is supplied
  if (!userid) {
    return res.status(400).json({
      error: "No user id supplied",
    });
  }
  // Check to see if the supplied id is a valid objectID
  if (!mongoose.isValidObjectId(userid)) {
    return res.status(400).json({
      error: "Invalid object id specified",
    });
  }
  // Check if author is a valid user that exists
  const authorById = await User.findById(userid);
  if (!authorById) {
    return res.status(400).json({
      error: "No users found with supplied id",
    });
  }
  // Get all tickets by the user
  const userTickets = await Ticket.find({
    author: authorById._id,
  });
  // If they don't have any tickets, respond
  if (!userTickets) {
    return res.status(200).json({
      success: `User ${authorById.username} has no tickets`,
    });
  }

  return res.status(200).json(userTickets);
});

module.exports = getUserTickets;
