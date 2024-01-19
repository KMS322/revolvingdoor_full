const express = require("express");
const router = express.Router();
const dayjs = require("dayjs");
const {
  User,
  UserIndividual,
  UserResume,
  UserBusiness,
  BusinessApplication,
} = require("../models");

router.post("/", async (req, res, next) => {
  try {
    const usersDB = await User.findAll({
      where: { userType: "individual" },
      include: [{ model: UserIndividual }, { model: UserResume }],
    });

    const users = usersDB.map((userInstance) => {
      const user = userInstance.toJSON();
      return {
        ...user,
        point: user.point || 0, // 기본값 설정
      };
    });
    // console.log("user0 : ", users[0]);
    const { businessId } = req.body.matchingData;

    const businessDB = await UserBusiness.findOne({
      where: { BusinessId: businessId },
      attributes: ["business_member_jibunAddress"],
      include: [
        {
          model: BusinessApplication,
          attributes: [
            "business_application_startYear",
            "business_application_startMonth",
            "business_application_career",
            "business_application_career1",
            "business_application_workPlace",
            "business_application_rank1",
            "business_application_rank2",
            "business_application_rank3",
            "business_application_rank4",
            "updatedAt",
          ],
        },
      ],
    });
    const business = businessDB.toJSON();
    // console.log("business : ", businessDB);
    users.map((user) => {
      // 거주지 /////////////////////////////////////////////////////
      const businessAddress = business.business_member_jibunAddress.split(" ");
      const userAddress =
        user.UserIndividual.user_member_jibunAddress.split(" ");
      if (businessAddress[0] === userAddress[0]) {
        if (businessAddress[1] === userAddress[1]) {
          user.point +=
            10 *
            (5 -
              Number(business.BusinessApplication.business_application_rank4));
        } else {
          user.point +=
            10 *
              (5 -
                Number(
                  business.BusinessApplication.business_application_rank4
                )) -
            10;
        }
      }
      // 근무타입 /////////////////////////////////////////////////////
      if (
        business.BusinessApplication.business_application_workPlace ===
        "출근·재택 병행"
      ) {
        user.point +=
          10 *
          (5 - Number(business.BusinessApplication.business_application_rank3));
      } else if (
        business.BusinessApplication.business_application_workPlace ===
        "사업자 주소와 동일 (출근)"
      ) {
        if (
          user.UserIndividual.user_member_workType === "모두가능" ||
          user.UserIndividual.user_member_workType === "출근"
        ) {
          user.point +=
            10 *
            (5 -
              Number(business.BusinessApplication.business_application_rank3));
        } else {
          user.point -= 100;
        }
      } else if (
        business.BusinessApplication.business_application_workPlace ===
        "재택 근무 가능"
      ) {
        if (user.UserIndividual.user_member_workType === "재택") {
          user.point +=
            10 *
            (5 -
              Number(business.BusinessApplication.business_application_rank3));
        } else {
          user.point -= 100;
        }
      }
      // 경력 /////////////////////////////////////////////////////
      if (
        business.BusinessApplication.business_application_career === "관계없음"
      ) {
        user.point +=
          10 *
          (5 - Number(business.BusinessApplication.business_application_rank2));
      } else if (
        business.BusinessApplication.business_application_career === "신입"
      ) {
        if (Number(user.UserIndividual.user_member_career) <= 1) {
          user.point +=
            10 *
            (5 -
              Number(business.BusinessApplication.business_application_rank2));
        } else {
          user.point +=
            10 *
              (5 -
                Number(
                  business.BusinessApplication.business_application_rank2
                )) -
            10;
        }
      } else if (business.BusinessApplication.business_application_career1) {
        if (
          Number(user.UserIndividual.user_member_career) >=
          Number(business.BusinessApplication.business_application_career1)
        ) {
          user.point +=
            10 *
            (5 -
              Number(business.BusinessApplication.business_application_rank2));
        } else {
          user.point +=
            10 *
              (5 -
                Number(
                  business.BusinessApplication.business_application_rank2
                )) -
            10;
        }
      }
      // 근무 시작 시기 /////////////////////////////////////////////////////
      if (business.BusinessApplication.business_application_startNow) {
        if (
          Number(
            dayjs(business.BusinessApplication.updatedAt).format("YYYYMM")
          ) >=
          Number(
            user.UserResumes.user_resume_hopeStartYear +
              user.UserResumes.user_resume_hopeStartMonth
          )
        ) {
          user.point +=
            10 *
            (5 -
              Number(business.BusinessApplication.business_application_rank1));
        }
      } else if (business.BusinessApplication.business_application_startYear) {
        const startDate =
          business.BusinessApplication.business_application_startYear +
          "0" +
          business.BusinessApplication.business_application_startMonth;
        if (
          Number(startDate) >=
          Number(
            user.UserResumes.user_resume_hopeStartYear +
              user.UserResumes.user_resume_hopeStartMonth
          )
        ) {
          user.point +=
            10 *
            (5 -
              Number(business.BusinessApplication.business_application_rank1));
        } else {
          user.point +=
            10 *
              (5 -
                Number(
                  business.BusinessApplication.business_application_rank1
                )) -
            10;
        }
      }
    });

    // users.map((user, index) => {
    //   console.log(index + 1, " : ", user.point);
    // });
    const sortedUsers = users.sort((a, b) => b.point - a.point);
    // console.log("sortedUsers : ", sortedUsers);
    const top5Users = sortedUsers.slice(0, 5);
    // top5Users.forEach((user, index) => {
    //   console.log(index + 1, " : ", user.toJSON());
    // });
    res.status(200).json(top5Users);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
