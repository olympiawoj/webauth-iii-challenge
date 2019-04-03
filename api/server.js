const express = require("express");

const server = express();

//import routers here
const authRouter = require("../auth/auth-router.js");

//use middleware here
server.use(express.json());

//user routers here
server.use("/api/auth", authRouter);

server.get("/", (req, res) => {
  res.send("server workin aiiight aiiiight");
});
module.exports = server;
