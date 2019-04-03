const express = require("express");

const server = express();

//import routers here

//use middleware here
server.use(express.json());

server.get("/", (req, res) => {
  res.send("server workin aiiight aiiiight");
});
module.exports = server;
