const passport = require("passport");
const local = require("./local");
const { User, Business } = require("../models");

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findOne({ where: { id } });
      if (user) {
        done(null, user);
      } else {
        const business = await Business.findOne({ where: { id } });
        if (business) {
          done(null, business);
        } else {
          done(null, null); // 사용자 또는 사업자가 찾아지지 않은 경우
        }
      }
    } catch (error) {
      console.error(error);
      done(error);
    }
  });

  local();
};

passport._debug = true;
