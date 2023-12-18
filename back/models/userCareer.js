module.exports = (sequelize, DataTypes) => {
  const UserCareer = sequelize.define(
    "UserCareer",
    {
      user_career_company: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      user_career_position: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
    }
  );
  UserCareer.associate = (db) => {
    db.UserCareer.belongsTo(db.User, { foreignKey: "UserId" });
  };
  return UserCareer;
};
