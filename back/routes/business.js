const express = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");
const {
  Business,
  BusinessRecruitment,
  BusinessApplication,
} = require("../models");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");
const router = express.Router();

router.post("/signup", isNotLoggedIn, async (req, res, next) => {
  try {
    const exBusiness = await Business.findOne({
      where: {
        business_member_id: req.body.business_member_id,
      },
    });
    if (exBusiness) {
      return res.status(403).send("이미 사용중인 아이디 입니다.");
    }
    const hashedPassword = await bcrypt.hash(req.body.business_member_pw, 12);
    const fullAddress =
      req.body.business_member_address1 +
      " " +
      req.body.business_member_address2;
    await Business.create({
      userType: req.body.userType,
      business_member_id: req.body.business_member_id,
      business_member_pw: hashedPassword,
      business_member_companyName: req.body.business_member_companyName,
      business_member_companyNumber: req.body.business_member_companyNumber,
      business_member_name: req.body.business_member_name,
      business_member_companyState: req.body.business_member_companyState,
      business_member_employeeNumber: req.body.business_member_employeeNumber,
      business_member_officeState: req.body.business_member_officeState,
      business_member_address: fullAddress,
      business_member_tel: req.body.business_member_tel,
      business_member_email: req.body.business_member_email,
    });
    res.status(201).send("ok");
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post("/login", isNotLoggedIn, (req, res, next) => {
  passport.authenticate("business-local", (err, user, info) => {
    console.log("info : ", info);
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      return res.status(401).send(info.reason);
    }
    return req.login(user, async (loginErr) => {
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
      console.log("req.body :", req.body);
      const fullBusinessWithoutPassword = await Business.findOne({
        where: { id: user.id },
        attributes: {
          exclude: ["business_member_pw"],
        },
        include: [
          {
            model: BusinessRecruitment,
            attributes: ["id"],
          },
          {
            model: BusinessApplication,
            attributes: ["id"],
          },
        ],
      });

      return res.status(200).json(fullBusinessWithoutPassword);
    });
  })(req, res, next);
});

router.post("/logout", isLoggedIn, (req, res) => {
  req.logout();
  req.session.destroy();
  res.send("ok");
});

module.exports = router;