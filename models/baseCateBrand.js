const { DataTypes } = require('sequelize');
// 商品品牌表
module.exports = (sequelize) => {
  sequelize.define(
    'baseCateBrand',
    {
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      logo: {
        type: DataTypes.STRING,
      },
      decription: {
        type: DataTypes.STRING,
      },
      isUsing: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1,
        comment: '是否启用,默认为是',
      },
      sort: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 99,
      },
    },
    {
      tableName: 'base_cate_brand',
    }
  );
};