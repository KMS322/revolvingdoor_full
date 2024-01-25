const express = require("express");
const router = express.Router();
const dayjs = require("dayjs");
const {
  User,
  UserIndividual,
  UserResume,
  UserBusiness,
  BusinessApplication,
  ConnectedIndividual,
  UserCareer,
} = require("../models");

router.post("/", async (req, res, next) => {
  try {
    const usersDB = await User.findAll({
      where: { userType: "individual" },
      include: [
        { model: UserIndividual },
        { model: UserResume },
        { model: UserCareer },
      ],
    });

    const users = usersDB.map((userInstance) => {
      const user = userInstance.toJSON();
      return {
        ...user,
        point: user.point || 0, // 기본값 설정
      };
    });

    const { businessId } = req.body.matchingData;
    const { applicationId } = req.body.matchingData;
    const businessDB = await UserBusiness.findOne({
      where: { BusinessId: businessId },
      attributes: ["business_member_jibunAddress"],
    });
    const currentDate = dayjs().format("YYYY.MM.DD");

    const applicationDB = await BusinessApplication.findOne({
      where: { id: applicationId },
      attributes: [
        "id",
        "business_application_startYear",
        "business_application_startMonth",
        "business_application_career",
        "business_application_careerMin",
        "business_application_careerMax",
        "business_application_workPlace",
        "business_application_rank1",
        "business_application_rank2",
        "business_application_rank3",
        "business_application_rank4",
        "individualCnt",
        "updatedAt",
      ],
    });
    await BusinessApplication.update(
      { applyDay: currentDate },
      { where: { id: applicationId } }
    );

    const business = businessDB.toJSON();
    const application = applicationDB.toJSON();
    // const application = business.BusinessApplications[0];
    users.map((user) => {
      // 거주지 /////////////////////////////////////////////////////
      const businessAddress = business.business_member_jibunAddress.split(" ");
      const userAddress =
        user.UserIndividual.user_member_jibunAddress.split(" ");
      if (businessAddress[0] === userAddress[0]) {
        if (businessAddress[1] === userAddress[1]) {
          if (businessAddress[2] === userAddress[2]) {
            user.point +=
              10 * (5 - Number(application.business_application_rank4));
          } else {
            10 * (5 - Number(application.business_application_rank4)) - 5;
          }
        } else {
          user.point +=
            10 * (5 - Number(application.business_application_rank4)) - 10;
        }
      }
      // 근무타입 /////////////////////////////////////////////////////
      if (application.business_application_workPlace === "출근·재택 병행") {
        user.point += 10 * (5 - Number(application.business_application_rank3));
      } else if (
        application.business_application_workPlace ===
        "사업자 주소와 동일 (출근)"
      ) {
        if (
          user.UserIndividual.user_member_workType === "모두가능" ||
          user.UserIndividual.user_member_workType === "출근"
        ) {
          user.point +=
            10 * (5 - Number(application.business_application_rank3));
        } else {
          user.point -= 100;
        }
      } else if (
        application.business_application_workPlace === "재택 근무 가능"
      ) {
        if (user.UserIndividual.user_member_workType === "재택") {
          user.point +=
            10 * (5 - Number(application.business_application_rank3));
        } else {
          user.point -= 100;
        }
      }
      // 경력 /////////////////////////////////////////////////////
      const career = Number(user.UserIndividual.user_member_career);
      // const careerYear = Math.floor(
      //   user.UserIndividual.user_member_career / 12
      // );
      // const careerMonth = user.UserIndividual.user_member_career % 12;
      if (application.business_application_career === "관계없음") {
        // user.point += 10 * (5 - Number(application.business_application_rank2));
        user.point += 0;
      } else if (application.business_application_career === "신입") {
        if (career === 0) {
          user.point +=
            10 * (5 - Number(application.business_application_rank2));
        } else if (career < 12) {
          10 * (5 - Number(application.business_application_rank2)) - 5;
        } else if (career >= 12 && career < 24) {
          10 * (5 - Number(application.business_application_rank2)) - 10;
        }
      } else if (application.business_application_career1) {
        if (
          Number(user.UserIndividual.user_member_career) >=
          Number(application.business_application_career1)
        ) {
          user.point +=
            10 * (5 - Number(application.business_application_rank2));
        } else {
          user.point +=
            10 * (5 - Number(application.business_application_rank2)) - 10;
        }
      }
      // 근무 시작 시기 /////////////////////////////////////////////////////
      if (application.business_application_startNow) {
        if (
          Number(dayjs(application.updatedAt).format("YYYYMM")) >=
          Number(
            user.UserResumes.user_resume_hopeStartYear +
              user.UserResumes.user_resume_hopeStartMonth
          )
        ) {
          user.point +=
            10 * (5 - Number(application.business_application_rank1));
        }
      } else if (application.business_application_startYear) {
        const startDate =
          application.business_application_startYear +
          "0" +
          application.business_application_startMonth;
        if (
          Number(startDate) >=
          Number(
            user.UserResumes.user_resume_hopeStartYear +
              user.UserResumes.user_resume_hopeStartMonth
          )
        ) {
          user.point +=
            10 * (5 - Number(application.business_application_rank1));
        } else {
          user.point +=
            10 * (5 - Number(application.business_application_rank1)) - 10;
        }
      }
    });

    // users.map((user, index) => {
    //   console.log(index + 1, " : ", user.point);
    // });
    const sortedUsers = users.sort((a, b) => b.point - a.point);

    const userCnt = Number(application.individualCnt);
    const top5Users = sortedUsers.slice(0, userCnt);
    const top15Users = sortedUsers.slice(0, 15);

    const exConnect = await ConnectedIndividual.findOne({
      where: { ApplicationId: application.id },
    });
    if (!exConnect) {
      for (const user of top15Users) {
        await ConnectedIndividual.create({
          point: String(user.point),
          concurrence: "대기",
          IndividualId: String(user.UserIndividual.IndividualId),
          BusinessId: businessId,
          ApplicationId: application.id,
        });
      }
    }
    res.status(200).json(top5Users);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post("/connect", async (req, res, next) => {
  try {
    const { id } = req.user.dataValues;
    const connectedCompanies = await ConnectedIndividual.findOne({
      where: { IndividualId: id },
      attributes: ["BusinessId", "concurrence"],
    });
    const businessId = connectedCompanies.BusinessId;
    const businessInfo = await UserBusiness.findOne({
      where: { BusinessId: businessId },
    });
    const applicationInfo = await BusinessApplication.findOne({
      where: { BusinessId: businessId },
    });
    const responseData = {
      businessInfo: businessInfo,
      applicationInfo: applicationInfo,
      connectedInfo: connectedCompanies,
    };
    res.status(200).json(responseData);
  } catch (error) {
    console.error(error);
    next();
  }
});

router.post("/concurrence", async (req, res, next) => {
  try {
    const { id } = req.user.dataValues;

    await ConnectedIndividual.update(
      {
        concurrence: req.body.agreement,
      },
      {
        where: { IndividualId: id },
      }
    );
    res.status(200).send("ok");
  } catch (error) {
    console.error(error);
    next();
  }
});

router.post("/changeStep", async (req, res, next) => {
  try {
    const { id } = req.user.dataValues;
    if (req.body.step === "동의여부조사중") {
      setTimeout(async () => {
        await BusinessApplication.update(
          {
            progressStep: "조사완료",
          },
          {
            where: { BusinessId: id },
          }
        );
      }, 1000);
    }
    await BusinessApplication.update(
      {
        progressStep: req.body.step,
      },
      {
        where: { BusinessId: id },
      }
    );
  } catch (error) {
    console.error(error);
    next();
  }
});

router.post("/loadConcurrence", async (req, res, next) => {
  try {
    const arr = req.body.arr;
    let sendConcurrence = [];
    for (const id of arr) {
      const object = await ConnectedIndividual.findOne({
        where: { IndividualId: Number(id) },
        attributes: ["IndividualId", "concurrence"],
      });
      if (object) {
        const newObject = {
          IndividualId: object.IndividualId,
          concurrence: object.concurrence,
        };
        sendConcurrence.push(newObject);
      }
    }
    res.status(200).json(sendConcurrence);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post("/clickPay", async (req, res, next) => {
  try {
    await UserBusiness.update(
      {
        business_member_pay: req.body.pay,
      },
      {
        where: { BusinessId: Number(req.body.businessId) },
      }
    );
    res.status(200).send("ok");
  } catch (error) {
    console.error(error);
    next();
  }
});
module.exports = router;
