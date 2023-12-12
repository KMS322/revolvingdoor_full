const User = require("../models/user");
const bcrypt = require("bcrypt");
const passport = require("passport");
exports.join = async (req, res, next) => {
  const { user_member_id, user_member_pw } = req.body;
  try {
    // const exUser = await User.findOne({ where: { user_member_id } });
    // if (exUser) {
    //   return res.redirect("/signStep3?error=exist");
    // }
    const hash = await bcrypt.hash(user_member_pw, 12);
    await User.create({
      user_member_id,
      user_member_pw: hash,
    });
    return res.redirect("/");
  } catch (error) {
    console.error(error);
    next(error);
  }
};

// POST /auth/checkEmail
exports.checkEmail = async (req, res, next) => {
  const { user_member_id } = req.body;
  try {
    const exUser = await User.findOne({ where: { user_member_id } });
    if (exUser) {
      res.json({ message: "exist" });
    } else {
      res.json({ message: "success" });
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
};

// Post /auth/login
exports.login = (req, res, next) => {
  passport.authenticate("local", (authError, user, info) => {
    if (authError) {
      //서버실패
      console.error(authError);
      // return next(authError);
      return res.json({ message: "serverFail" });
    }
    if (!user) {
      // 로직실패

      // return res.redirect(`/?loginError=${info.message}`);
      return res.json({ message: "loginFail" });
    }
    return req.login(user, (loginError) => {
      // 로그인 성공
      console.log("로그인 성공");
      if (loginError) {
        console.error(loginError);
        return next(loginError);
        // return res.json({ message: "serverFail" });
      }
      // return res.redirect("/");
      return res.json({ message: "loginSuccess" });
      // return;
    });
  })(req, res, next);
};

exports.logout = (req, res) => {
  // {} 브라우저 connect.sid가 남아있어도
  req.logout(() => {
    res.redirect("/");
  });
};
