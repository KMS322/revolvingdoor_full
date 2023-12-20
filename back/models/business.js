module.exports = (sequelize, DataTypes) => {
  const Business = sequelize.define(
    "Business",
    {
      userType: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      business_member_id: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      business_member_pw: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
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
  Business.associate = (db) => {
    db.Business.hasMany(db.BusinessApplication);
    db.Business.hasOne(db.BusinessRecruitment);
  };
  return Business;
};
