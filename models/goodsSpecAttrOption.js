const { DataTypes } = require('sequelize');
// 商品规格属性值表
module.exports = (sequelize) => {
  sequelize.define(
    'goodsSkuAttrOption',
    {
      value: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      tableName: 'goods_sku_attr_option',
    }
  );
};
