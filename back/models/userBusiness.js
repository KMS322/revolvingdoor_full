module.exports = (sequelize, DataTypes) => {
  const UserBusiness = sequelize.define(
    "UserBusiness",
    {
      business_member_companyName: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      business_member_companyNumber: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      business_member_name: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      business_member_companyState: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      business_member_employeeNumber: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      business_member_officeState: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      business_member_address: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      business_member_tel: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      business_member_email: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );
  UserBusiness.associate = (db) => {
    db.UserBusiness.belongsTo(db.User, { foreignKey: "BusinessId" });
  };
  return UserBusiness;
};
