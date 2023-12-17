module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      // MYSQL에서는 users 테이블
      user_member_id: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true,
      },
      user_member_pw: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      userType: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );
  User.associate = (db) => {
    db.User.hasOne(db.UserInfo);
    db.User.hasOne(db.UserCareer);
    db.User.hasMany(db.UserResume);
    db.User.hasMany(db.Post);
  };
  return User;
};
