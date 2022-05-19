/* 
@_METHOD DELETE
@_PATH ./users/delete/:id
@_RETURN SUCCESS MESSAGE
@_ACCESS ADMIN PRIVATE
*/

const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const User = require("../../../models/userModel");

const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json({ error: "No user id supplied" });
  }
  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ error: "Invalid Object ID specified" });
  }

  //Check to see if the id supplied is a valid user id
  const user = await User.findByIdAndDelete(id);
  if (!user) {
    return res.status(400).json({ error: "No user with this ID found" });
  }
  return res.status(200).json({
    success: `User with id ${id} deleted successfully`,
  });
});

module.exports = deleteUser;
