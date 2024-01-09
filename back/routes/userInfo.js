const express = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");
const { UserIndividual } = require("../models");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");
const router = express.Router();

router.get("/individual", isLoggedIn, async (req, res, next) => {
  try {
    if (req.user) {
      const individualInfo = await UserIndividual.findOne({
        where: { IndividualId: req.user.id },
      });
      res.status(200).json(individualInfo);
    } else {
      res.status(200).json(null);
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
