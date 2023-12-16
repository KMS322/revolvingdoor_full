module.exports = (sequelize, DataTypes) => {
  const UserResume = sequelize.define(
    "UserResume",
    {
      title: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      content: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
    }
  );
  UserResume.associate = (db) => {
    db.UserResume.belongsTo(db.User);
  };
  return UserResume;
};
