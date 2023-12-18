module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      userType: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      user_member_id: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true,
      },
      user_member_pw: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      user_member_name: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      user_member_num: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      user_member_address: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      user_member_tel: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      user_member_email: {
        type: DataTypes.STRING(20),
        allowNull: true,
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
