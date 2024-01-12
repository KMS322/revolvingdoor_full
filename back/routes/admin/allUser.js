const express = require("express");
const router = express.Router();
const { User, UserIndividual } = require("../../models");

router.post("/allUser", async (req, res, next) => {
  try {
    const allUser = await User.findAll();
    res.status(200).json(allUser);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post("/individual", async (req, res, next) => {
  try {
    const individual = await UserIndividual.findAll();
    res.status(200).json(individual);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
