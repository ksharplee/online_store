const { DataTypes } = require('sequelize');
// 用户个人信息表
module.exports = (sequelize) => {
  sequelize.define(
    'userProfile',
    {
      realName: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      idNo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sex: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0,
        comment: '0.保密 1.男 2.女',
      },
      birthday: {
        type: DataTypes.DATE,
      },
      points: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: 'user_profile',
    }
  );
};
