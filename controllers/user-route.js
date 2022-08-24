const router = require("express").Router();
const {User} = require("../models");

router.post("/", async (req, res) => {
  const { name, password } = req.body;
  const newUser = await User.create({ name, password });
  res.json([newUser]);
});

module.exports = router;
