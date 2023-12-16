const express = require("express");
const { UserResume } = require("../models");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const resumes = await UserResume.findAll({
      where: { UserId: req.user.id },
    });
    res.status(200).json(resumes);
  } catch (error) {
    console.error(error);
    next(error);
  }
});
module.exports = router;
