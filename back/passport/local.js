const passport = require("passport");
const { Strategy: LocalStrategy } = require("passport-local");
const bcrypt = require("bcrypt");
const { User } = require("../models");
module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "user_member_id",
        passwordField: "user_member_password",
      },
      async (user_member_id, user_member_password, done) => {
        try {
          const user = await User.findOne({
            where: { user_member_id },
          });
          if (!user) {
            return done(null, false, { reason: "존재하지 않는 사용자입니다." });
          }
          const result = await bcrypt.compare(
            user_member_password,
            user.user_member_password
          );
          if (result) {
            return done(null, user);
          }
          return done(null, false, { reason: "비밀번호가 틀렸습니다." });
        } catch (error) {
          console.error(error);
          return done(error);
        }
      }
    )
  );
};
