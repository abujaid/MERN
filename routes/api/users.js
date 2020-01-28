const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

// @route  GET api/users
// @desc   Test routes
// @acess  Public

router.post("/", (req, res) => {
  console.log(req.body);
  res.send("Users route");
});

module.exports = router;
