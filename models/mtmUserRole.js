const { DataTypes } = require('sequelize');
// 用户登录信息与用户角色连接表
module.exports = (sequelize) => {
  sequelize.define(
    'mtmUserRole',
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      roleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: 'mtm_user_role',
    }
  );
};
