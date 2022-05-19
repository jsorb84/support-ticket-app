/* 
@_METHOD GET
@_PATH ./users
@_RETURN OBJECT CONTAINING ALL USERS
@_ACCESS PRIVATE
*/

const getUsers = function (req, res) {
  res.send("get users");
};

module.exports = getUsers;
