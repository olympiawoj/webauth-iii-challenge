const router = require("express").Router();
const Users = require("../users/users-model.js");

router.get("/users", async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error getting users" });
  }
});

module.exports = router;
