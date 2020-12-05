const { DataTypes } = require('sequelize');
// 用户角色表
module.exports = (sequelize) => {
  sequelize.define(
    'userRole',
    {
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
      },
      decription: {
        type: DataTypes.STRING,
      },
      type: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0,
        comment: '0.采购商 1.供应商  2.管理员',
      },
    },
    {
      tableName: 'user_role',
    }
  );
};
