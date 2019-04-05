const express = require("express");

const server = express();

//import routers here
const authRouter = require("../auth/auth-router.js");
const usersRouter = require("../users/users-router.js");
//use middleware here
server.use(express.json());

//user routers here
server.use("/api/auth", authRouter);
server.use("/api", usersRouter);

server.get("/", (req, res) => {
  res.send("server workin aiiight aiiiight");
});
module.exports = server;
