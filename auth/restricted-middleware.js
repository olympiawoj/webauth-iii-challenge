const jwt = require("jsonwebtoken");

const secrets = require("../api/secrets.js");

const Users = require("../users/users-model.js");

module.exports = (req, res, next) => {
  if (token) {
    jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
      if (err) {
        //token not valid
        res.status(401).json({ message: "Invalid credentials" });
      } else {
        req.decodedJwt = decodedToken;
        next();
      }
    });
  } else {
    res.status(401).json({ message: "No token provided" });
  }
};
