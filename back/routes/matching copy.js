const express = require("express");
const router = express.Router();
const dummyData = require("./dummyData");
const dayjs = require("dayjs");
router.post("/", async (req, res, next) => {
  try {
    const users = dummyData;
    const { application } = req.body.matchingData;
    const { address } = req.body.matchingData;
    // console.log("application : ", application);
    // console.log("address : ", address);
    const addressAry = address.split(" ");
    users.map((user, index) => {
      // 거주지
      const userAddress = user.region.split(" ");
      if (addressAry[0] === userAddress[0]) {
        if (addressAry[1] === userAddress[1]) {
          user.point +=
            10 * (5 - Number(application.business_application_rank4));
        } else {
          user.point +=
            10 * (5 - Number(application.business_application_rank4)) - 10;
        }
      }
      // 근무타입
      if (application.business_application_workPlace === "출근·재택 병행") {
        user.point += 10 * (5 - Number(application.business_application_rank3));
      } else if (
        application.business_application_workPlace ===
        "사업자 주소와 동일 (출근)"
      ) {
        if (user.workType === "모두가능" || user.workType === "출근") {
          user.point +=
            10 * (5 - Number(application.business_application_rank3));
        } else {
          user.point -= 100;
        }
      } else if (
        application.business_application_workPlace === "재택 근무 가능"
      ) {
        if (user.workType === "재택") {
          user.point +=
            10 * (5 - Number(application.business_application_rank3));
        } else {
          user.point -= 100;
        }
      }
      // 경력
      if (application.business_application_career === "관계없음") {
        user.point += 10 * (5 - Number(application.business_application_rank2));
      } else if (application.business_application_career === "신입") {
        if (Number(user.career) <= 1) {
          user.point +=
            10 * (5 - Number(application.business_application_rank2));
        } else {
          user.point +=
            10 * (5 - Number(application.business_application_rank2)) - 10;
        }
      } else if (application.business_application_career1) {
        if (
          Number(user.career) >=
          Number(application.business_application_career1)
        ) {
          user.point +=
            10 * (5 - Number(application.business_application_rank2));
        } else {
          user.point +=
            10 * (5 - Number(application.business_application_rank2)) - 10;
        }
      }
      // 근무 시작 시기
      if (application.business_application_startNow) {
        if (
          Number(dayjs(application.updatedAt).format("YYYYMM")) >=
          Number(user.start)
        ) {
          user.point +=
            10 * (5 - Number(application.business_application_rank1));
        }
      } else if (application.business_application_startYear) {
        const startDate =
          application.business_application_startYear +
          "0" +
          application.business_application_startMonth;
        if (Number(startDate) >= Number(user.start)) {
          user.point +=
            10 * (5 - Number(application.business_application_rank1));
        } else {
          user.point +=
            10 * (5 - Number(application.business_application_rank1)) - 10;
        }
      }
    });
    users.map((user, index) => {
      console.log(index + 1, " : ", user.point);
    });
    const sortedUsers = users.sort((a, b) => b.point - a.point);
    const top5Users = sortedUsers.slice(0, 5);
    res.status(200).json(top5Users);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
