const express = require("express");
const router = express.Router();
const { BusinessApplication, BusinessRecruitment } = require("../../models");

router.post("/application", async (req, res, next) => {
  try {
    const businessApplication = await BusinessApplication.findOne({
      where: {
        BusinessId: req.body.businessId,
      },
    });
    res.status(200).json(businessApplication);
  } catch (error) {
    console.error(error);
    next();
  }
});

router.post("/recruitment", async (req, res, next) => {
  try {
    const businessRecruitment = await BusinessRecruitment.findOne({
      where: {
        BusinessId: req.body.businessId,
      },
    });
    res.status(200).json(businessRecruitment);
  } catch (error) {
    console.error(error);
    next();
  }
});

module.exports = router;
