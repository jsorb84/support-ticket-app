const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const asyncHandler = require("express-async-handler");
/* OPEN DB CONNECTION */

const dbConnect = asyncHandler(async () => {
  await mongoose.connect(process.env.APP_MONGO_URI);
  console.log("Mongoose: DB Connection Successful".rainbow);
});

module.exports = dbConnect;
