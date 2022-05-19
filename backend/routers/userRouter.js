const express = require("express");
const userRouter = express.Router();
const createUser = require("./controllers/users/createUser");
const getUsers = require("./controllers/users/getUsers");
const deleteUser = require("./controllers/users/deleteUser");

/* domain/users index */
userRouter.get("/", getUsers);
userRouter.post("/create", createUser);
userRouter.delete("/delete", deleteUser);

module.exports = userRouter;
