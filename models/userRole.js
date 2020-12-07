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
      id: {
        type: DataTypes.TINYINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        comment: '1.采购商 2.供应商 3.管理员',
      },
    },
    {
      tableName: 'user_role',
    }
  );
};
