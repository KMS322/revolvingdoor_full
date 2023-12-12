const Sequelize = require("sequelize");

class User extends Sequelize.Model {
  static initiate(sequelize) {
    User.init(
      {
        user_member_id: {
          type: Sequelize.STRING(40),
          allowNull: true,
          unique: true,
        },
        user_member_pw: {
          type: Sequelize.STRING(100),
          allowNull: true,
        },
        provider: {
          // 로그인시 로컬 or 카카오 둘중 하나만 선택
          type: Sequelize.ENUM("local", "kakao"),
          allowNull: false,
          defaultValue: "local",
        },
      },
      {
        sequelize,
        timestamps: true, // createdAt, updatedAt 기록
        underscored: false,
        modelName: "User", // js에서 쓰는 이름
        tableName: "users", // 테이블 이름
        paranoid: true, // deletedAt(유저 삭제일) 저장, softdelete
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {}
}

module.exports = User;
