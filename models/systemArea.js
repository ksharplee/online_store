const { DataTypes } = require('sequelize');
// 大陆地区表
module.exports = (sequelize) => {
  sequelize.define(
    'systemArea',
    {
      areaId: {
        type: DataTypes.CHAR(6),
        allowNull: false,
        unique: true,
        comment: '6位地址id',
      },
      areaName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      areaType: {
        type: DataTypes.TINYINT,
        allowNull: false,
        comment: '1.省 2.市 3.区'
      },
    },
    {
      tableName: 'system_area',
    }
  );
};
