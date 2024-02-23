const express = require("express");
const { BusinessApplication, UserBusiness } = require("../models");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "로그인이 필요합니다." });
    }
    const applications = await BusinessApplication.findAll({
      where: { BusinessId: req.user.id },
    });
    res.status(200).json(applications);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post("/all", async (req, res, next) => {
  try {
    const allLists = await BusinessApplication.findAll({
      order: [["updatedAt", "DESC"]],
    });

    const businessApplications = [];
    for (const application of allLists) {
      const userBusiness = await UserBusiness.findOne({
        where: { BusinessId: application.BusinessId },
      });
      if (userBusiness) {
        businessApplications.push({ application, userBusiness });
      }
    }
    res.status(200).json(businessApplications);
  } catch (error) {
    console.error(error);
    next(error);
  }
});
module.exports = router;
