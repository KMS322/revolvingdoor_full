const express = require("express");
const { UserCareer } = require("../models");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "로그인이 필요합니다." });
    }
    const careers = await UserCareer.findAll({
      where: { UserId: req.user.id },
    });
    res.status(200).json(careers);
  } catch (error) {
    console.error(error);
    next(error);
  }
});
module.exports = router;
