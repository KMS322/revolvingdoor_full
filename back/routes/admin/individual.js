const express = require("express");
const router = express.Router();
const { User, UserIndividual, UserResume } = require("../../models");

router.post("/resume", async (req, res, next) => {
  try {
    const individual = await UserResume.findOne({
      where: {
        IndividualId: req.body.individualId,
      },
    });
    res.status(200).json(individual);
  } catch (error) {
    console.error(error);
    next();
  }
});

module.exports = router;
