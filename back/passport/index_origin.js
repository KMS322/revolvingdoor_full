const passport = require("passport");
const local = require("./local");
const { User } = require("../models");

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findOne({ where: { id } });
      console.log("passport deserial 안에서 user : ", user);
      done(null, user); // req.user
    } catch (error) {
      console.error(error);
      done(error);
    }
  });

  local();
};

passport._debug = true;