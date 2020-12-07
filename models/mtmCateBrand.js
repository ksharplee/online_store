const { DataTypes } = require('sequelize');
// 商品分类与商品品牌连接表
module.exports = (sequelize) => {
  sequelize.define(
    'mtmCateBrand',
    {
      cateId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      brandId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: 'mtm_cate_brand',
    }
  );
};
