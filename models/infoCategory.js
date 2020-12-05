const { DataTypes } = require('sequelize');
// 文章分类表
module.exports = (sequelize) => {
  sequelize.define(
    'infoCategory',
    {
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
      },
      decription: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: 'info_category',
    },
  );
};
