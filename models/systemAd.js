const { DataTypes } = require('sequelize');
// 广告信息表
module.exports = (sequelize) => {
  sequelize.define(
    'systemAd',
    {
      img: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      link: {
        type: DataTypes.STRING,
      },
      title: {
        type: DataTypes.STRING,
      },
      startDate: {
        type: DataTypes.DATE,
      },
      endDate: {
        type: DataTypes.DATE,
      },
      sort: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 99,
      },
      type: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1,
        comment: '1.电脑端 2.移动端',
      },
      isUsing: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1,
        comment: '是否启用,默认为是',
      },
    },
    {
      tableName: 'system_ad',
    }
  );
};
