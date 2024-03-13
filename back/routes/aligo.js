const express = require("express");
const router = express.Router();
const aligoapi = require("aligoapi");
const { UserIndividual, ConnectedIndividual } = require("../models");

const AuthData = {
  key: "8bcje2w5ep2y98vv950gr3m281fs7dy5",
  user_id: "bwsuh00",
};
router.post("/sendSms", async (req, res, next) => {
  try {
    const matchedUsers = await ConnectedIndividual.findAll({
      where: { ApplicationId: req.body.applicationId },
      attributes: ["IndividualId"],
    });
    delete req.body.applicationId;
    req.body.sender = "01030728495";
    // const promises = [];
    for (const user of matchedUsers) {
      const userTel = await UserIndividual.findOne({
        where: { IndividualId: user.IndividualId },
        attributes: ["user_member_name", "user_member_tel"],
      });
      req.body.msg = `${userTel.user_member_name}님, 매칭이 되었습니다. http://www.accydream.com/ 접속하여 확인 바람.`;
      req.body.receiver = userTel.user_member_tel;

      // promises.push(aligoapi.send(req, AuthData));
    }
    // Promise.all(promises)
    //   .then((responses) => {
    //     console.log("alligo", responses);
    //     res.send(responses); // 모든 응답을 클라이언트에게 보냄
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     res.status(500).send(error); // 오류 발생 시 클라이언트에게 오류 응답을 보냄
    //   });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
