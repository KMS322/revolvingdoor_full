const express = require("express");
const router = express.Router();
const dummyData = require("./dummyData");
const dayjs = require("dayjs");
const fs = require("fs");
const xlsx = require("xlsx");
const path = require("path");

const filePath = path.resolve(__dirname, "./dummyData.xlsx");

function readExcelFile(filePath) {
  try {
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0]; // 첫 번째 시트를 사용
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = xlsx.utils.sheet_to_json(worksheet);

    return jsonData;
  } catch (error) {
    console.error("Error reading Excel file:", error);
    throw error;
  }
}

// 변환된 데이터를 원하는 형태의 객체 배열로 가공하는 함수
function processExcelData(data) {
  return data.map((row, index) => {
    return {
      no: index + 1,
      name: row["이름"],
      career: row["경력"],
      workType: row["근무형태"],
      region1: row["지역1"],
      region2: row["지역2"],
      start: row["시작일"],
      point: 0,
    };
  });
}

// 파일을 읽어와서 가공된 데이터를 클라이언트에게 응답하는 함수
function generateObjectArrayFromExcel(filePath, res) {
  const excelData = readExcelFile(filePath);
  const processedData = processExcelData(excelData);
  return processedData;
}

// 예제 사용

router.post("/", async (req, res, next) => {
  try {
    const users = generateObjectArrayFromExcel(filePath, res);
    // console.log("users : ", users);
    const { application } = req.body.matchingData;
    const { address } = req.body.matchingData;
    // console.log("application : ", application);
    // console.log("address : ", address);
    const addressAry = address.split(" ");
    users.map((user, index) => {
      // 거주지
      // const userAddress = user.region.split(" ");
      if (addressAry[0] === user.region1) {
        if (addressAry[1] === user.region2) {
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
    // users.map((user, index) => {
    //   console.log(index + 1, " : ", user.point);
    // });
    const sortedUsers = users.sort((a, b) => b.point - a.point);
    const top5Users = sortedUsers.slice(0, 5);
    res.status(200).json(top5Users);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
