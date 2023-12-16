const express = require("express");
const router = express.Router();
const { UserResume } = require("../models");
const { isLoggedIn } = require("./middlewares");

router.post("/", isLoggedIn, async (req, res, next) => {
  try {
    const resume = await UserResume.create({
      title: req.body.user_resume_title,
      UserId: req.user.id,
    });
    const fullResume = await UserResume.findOne({
      where: { id: resume.id },
      include: [
        {
          model: User,
        },
      ],
    });
    res.status(201).json(fullResume);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete("/", (req, res) => {});

module.exports = router;
