const express = require("express");
const router = express.Router();
const { isLoggedIn, isNotLoggedIn } = require("../middlewares");

router.use((req, res, next) => {
  console.log("BBBBB");
  res.locals.user = req.user;
  // res.json({ message: "req.user" });
  // res.locals.followerCount = 0;
  // res.locals.followingCount = 0;
  // res.locals.followwingIdList = [];
  next();
});

module.exports = router;
