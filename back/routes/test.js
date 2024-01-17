const express = require("express");
const bcrypt = require("bcrypt");
const { User, UserIndividual, UserResume } = require("../models");
const router = express.Router();
const dummyUsers = require("./dummyUser");
router.post("/addUser", async (req, res, next) => {
  try {
    for (const dummyUser of dummyUsers) {
      const hashedPassword = await bcrypt.hash(dummyUser.user_member_pw, 12);

      const addedUser = await User.create({
        userType: dummyUser.userType,
        user_member_id: dummyUser.user_member_id,
        user_member_pw: hashedPassword,
      });

      await UserIndividual.create({
        user_member_name: dummyUser.user_member_name,
        user_member_num: dummyUser.user_member_num,
        user_member_jibunAddress: dummyUser.user_member_jibunAddress,
        user_member_detailAddress: dummyUser.user_member_detailAddress,
        user_member_roadAddress: dummyUser.user_member_roadAddress,
        user_member_tel: dummyUser.user_member_tel,
        user_member_email: dummyUser.user_member_email,
        IndividualId: addedUser.id,
      });

      await UserResume.create({});
    }

    res.status(200).send("Users added");
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
