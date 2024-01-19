module.exports = (sequelize, DataTypes) => {
  const ApplyProcess = sequelize.define(
    "ApplyProcess",
    {
      companyName: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );
  return ApplyProcess;
};
