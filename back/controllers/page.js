// const Post = require("../models/post");
// const User = require("../models/user");
// exports.renderProfile = (req, res, next) => {
//   // 서비스를 호출
//   res.render("profile", { title: "내 정보 - NodeBird" });
// };

// exports.renderJoin = (req, res, next) => {
//   res.render("join", { title: "회원 가입 - revolginDoor" });
// };

exports.renderMain = async (req, res, next) => {
  try {
    // const posts = await Post.findAll({
    //   include: {
    //     model: User,
    //     attributes: ["id", "nick"],
    //   },
    //   order: [["createdAt", "DESC"]],
    // });
    // res.render("main", {
    //   title: "NodeBird",
    //   twits: posts,
    // });
    // if (req.isAuthenticated()) {
    //   const user = {
    //     id: req.user.id,
    //     username: req.user.username,
    //     // 추가 필요한 정보 추가
    //   };

    //   console.log("req.user : ", req.user);
    //   res.json("user");
    // } else {
    //   console.log("User not authenticated");
    //   // res.status(401).json({ error: "인증되지 않은 사용자" });
    // }
    res.json({ message: "main" });
    next();
  } catch (err) {
    console.error(err);
    next(err);
  }
};

// 라우터 -> 컨트롤러 -> 서비스(요청, 응답 모른다)
