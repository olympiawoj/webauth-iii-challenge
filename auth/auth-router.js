const router = require("express").Router();
const Users = require("../users/users-model.js");

//REGISTER
router.post("/register", async (req, res) => {
  let user = req.body;
  console.log(user);
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
      res.status(200).json(user);
    } else {
      res
        .status(401)
        .json({ message: "Please include a username and password" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});
