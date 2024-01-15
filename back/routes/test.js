const express = require("express");
const bcrypt = require("bcrypt");
const { User, UserIndividual } = require("../models");
const router = express.Router();

const dummyUsers = [
  {
    userType: "individual",
    user_member_id: "11",
    user_member_pw: "11",
    user_member_name: "김일일 ",
    user_member_num: "910101",
    user_member_jibunAddress: "경북 영천시 금호읍 덕성리 95-9",
    user_member_detailAddress: "11번지",
    user_member_roadAddress: "경북 영천시 금호읍 대구대길 7",
    user_member_tel: "01012341111",
    user_member_email: "11@11.com",
  },
  {
    userType: "individual",
    user_member_id: "22",
    user_member_pw: "22",
    user_member_name: "이이이",
    user_member_num: "920202",
    user_member_jibunAddress: "서울 서대문구 충정로3가 31-35",
    user_member_detailAddress: "22번지",
    user_member_roadAddress: "서울 서대문구 경기대로1길 8",
    user_member_tel: "01012342222",
    user_member_email: "22@22.com",
  },
  {
    userType: "individual",
    user_member_id: "33",
    user_member_pw: "33",
    user_member_name: "박삼삼",
    user_member_num: "930303",
    user_member_jibunAddress: "경북 안동시 정하동 636-12",
    user_member_detailAddress: "33번지",
    user_member_roadAddress: "경북 안동시 강남11길 36",
    user_member_tel: "01012343333",
    user_member_email: "33@3.com",
  },
];
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
    }

    res.status(200).send("Users added");
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
