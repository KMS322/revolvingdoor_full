const express = require("express");
const router = express.Router();
const { User } = require("../../models");

router.post("/allUser", async (req, res, next) => {
  try {
    const allUser = await User.findAll();
    res.status(200).json(allUser);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
