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
