const express = require("express");
const router = express.Router();
const {
  // renderJoin,
  renderMain,
  // renderProfile,
} = require("../controllers/page");
const { isLoggedIn, isNotLoggedIn } = require("../middlewares");

router.use((req, res, next) => {
  res.locals.user = req.user;
  // res.json({ message: "req.user" });
  // res.locals.followerCount = 0;
  // res.locals.followingCount = 0;
  // res.locals.followwingIdList = [];
  next();
});
// router.get("/", renderMain);
// router.get("/", isNotLoggedIn, (req, res) => {
//   console.log("ddd");
//   if (req.isAuthenticated()) {
//     const user = {
//       id: req.user.id,
//       username: req.user.username,
//       // 추가 필요한 정보 추가
//     };
//     console.log("AA");
//     console.log("req.user : ", req.user);
//     res.json(user);
//   } else {
//     console.log("User not authenticated");
//     res.status(401).json({ error: "인증되지 않은 사용자" });
//   }
// });

module.exports = router;
