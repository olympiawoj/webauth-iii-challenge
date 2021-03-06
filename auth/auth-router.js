const router = require("express").Router();
const Users = require("../users/users-model.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const secret = require("../api/secrets.js").jwtSecret;

//REGISTER
router.post("/register", async (req, res) => {
  let user = req.body;
  console.log(user);
  //hash the password
  const hash = bcrypt.hashSync(user.password, 8);
  user.password = hash;
  try {
    const saved = await Users.add(user);
    res.status(201).json(saved);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error registering" });
  }
});
module.exports = router;

//LOGIN
router.post("/login", async (req, res) => {
  let { username, password, department } = req.body;
  console.log(username, password);
  try {
    if (username && password) {
      console.log("yes");
      const user = await Users.findBy({ username });
      console.log(user);
      const token = generateToken(user);
      console.log(token);
      if (user && bcrypt.compareSync(password, user.password)) {
        res.status(200).json({ message: `Welcome ${user.username}`, token });
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    } else {
      res
        .status(401)
        .json({ message: "Please include a username and password" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

//LOGOUT

//GENERATE TOKEN FUNCTION
function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };
  //   const secret = requires("../api/secrets").jwtSecret;
  const options = {
    expiresIn: "1d"
  };
  return jwt.sign(payload, secret, options);
}
