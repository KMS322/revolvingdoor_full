module.exports = (sequelize, DataTypes) => {
  const UserInfo = sequelize.define(
    "UserInfo",
    {
      // MYSQL에서는 users 테이블
      user_member_id11: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true,
      },
      user_member_pw11: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );
  UserInfo.associate = (db) => {
    db.UserInfo.belongsTo(db.User);
  };
  return UserInfo;
};
