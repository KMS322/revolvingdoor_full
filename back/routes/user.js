const express = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");
const { User, UserResume, UserCareer } = require("../models");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    if (req.user) {
      const fullUserWithoutPassword = await User.findOne({
        where: { id: req.user.id },
        attributes: {
          exclude: ["user_member_pw"],
        },
        include: [
          {
            model: UserResume,
            attributes: ["id"],
          },
          {
            model: UserCareer,
            attributes: ["id"],
          },
        ],
      });
      res.status(200).json(fullUserWithoutPassword);
    } else {
      res.status(200).json(null);
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});
router.post("/signup", isNotLoggedIn, async (req, res, next) => {
  try {
    const exUser = await User.findOne({
      where: {
        user_member_id: req.body.user_member_id,
      },
    });
    if (exUser) {
      return res.status(403).send("이미 사용중인 아이디 입니다.");
    }
    const hashedPassword = await bcrypt.hash(req.body.user_member_pw, 12);
    const fullAddress =
      req.body.user_member_address1 + " " + req.body.user_member_address2;
    await User.create({
      userType: req.body.userType,
      user_member_id: req.body.user_member_id,
      user_member_pw: hashedPassword,
      user_member_name: req.body.user_member_name,
      user_member_num: req.body.user_member_num,
      user_member_address: fullAddress,
      user_member_tel: req.body.user_member_tel,
      user_member_email: req.body.user_member_email,
    });
    res.status(201).send("ok");
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post("/login", isNotLoggedIn, (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
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
      const fullUserWithoutPassword = await User.findOne({
        where: { id: user.id },
        attributes: {
          exclude: ["user_member_pw"],
        },
        include: [
          {
            model: UserResume,
            attributes: ["id"],
          },
          {
            model: UserCareer,
            attributes: ["id"],
          },
        ],
      });
      console.log("login 라우터 진입");
      return res.status(200).json(fullUserWithoutPassword);
    });
  })(req, res, next);
});

router.post("/logout", isLoggedIn, (req, res) => {
  req.logout(() => {
    // res.redirect("/");
  });
  res.status(201).send("ok");
});

module.exports = router;
