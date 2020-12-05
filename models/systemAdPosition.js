const { DataTypes } = require('sequelize');
// 广告位置表
module.exports = (sequelize) => {
  sequelize.define(
    'systemAdPosition',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      desc: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isUsing: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1,
        comment: '是否启用,默认为是',
      },
      width: {
        type: DataTypes.INTEGER,
      },
      height: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: 'system_ad_position',
    }
  );
};
