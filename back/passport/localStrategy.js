const passport = require("passport");
const { Strategy: LocalStrategy } = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const User = require("../models/user");
module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "user_member_id",
        passwordField: "user_member_pw",
        passReqToCallback: false,
      },
      async (user_member_id, user_member_pw, done) => {
        // done(서버실패, 성공유저, 로직실패)
        console.log("user_member_id", user_member_id);
        console.log("user_member_pw", user_member_pw);

        try {
          const exUser = await User.findOne({ where: { user_member_id } });
          if (exUser) {
            console.log("기존 유저가 있다.");
            const result = await bcrypt.compare(
              user_member_pw,
              exUser.user_member_pw
            );
            console.log("result : ", result);
            console.log("exUser : ", exUser);
            if (result) {
              done(null, exUser);
            } else {
              done(null, false, { message: "비밀번호가 일치하지 않습니다." });
            }
          } else {
            console.log("기존 유저가 없다.");
            done(null, false, { message: "가입되지 않은 회원입니다." });
          }
        } catch (error) {
          console.error(error);
          done(error);
        }
      }
    )
  );
};
