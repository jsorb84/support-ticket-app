/* 
@_METHOD POST
@_PATH ./users
@_RETURN NEW CREATED USER
@_ACCESS PUBLIC
*/

const mongoose = require("mongoose");
const User = require("../../../models/userModel");
const asyncHandler = require("express-async-handler");

const createUser = asyncHandler(async (req, res) => {
  const { username, password, email } = req.body;

  // Make sure all req'd info is supplied
  if (!username || !password || !email) {
    return res.status(400).json({
      error: "Please submit all required information",
    });
  }
  // Check to make sure user doesnt exist
  const checkEmail = await User.findOne({ email: email.toLowerCase() });
  const checkUsername = await User.findOne({ username: username });

  if (!checkEmail && !checkUsername) {
    // Create new user
    const newUser = await User.create({
      username: username,
      password: password,
      email: email.toLowerCase(),
      admin: false,
    });
    res.status(201).json(newUser);
  } else {
    return res.status(400).json({
      error: "This username or email is already in use",
    });
  }
});

module.exports = createUser;
