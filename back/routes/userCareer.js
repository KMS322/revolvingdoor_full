const express = require("express");
const router = express.Router();
const { UserCareer, User } = require("../models");
const { isLoggedIn } = require("./middlewares");

router.post("/", isLoggedIn, async (req, res, next) => {
  try {
    const career = await UserCareer.create({
      user_career_company: req.body.user_career_company,
      UserId: req.user.id,
    });
    const fullCareer = await UserCareer.findOne({
      where: { id: career.id },
      include: [
        {
          model: User,
        },
      ],
    });
    res.status(201).json(fullCareer);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete("/", (req, res) => {});

module.exports = router;
