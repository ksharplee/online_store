const { DataTypes } = require('sequelize');
// 商品SPU图片
module.exports = (sequelize) => {
  sequelize.define(
    'goodsSkuImg',
    {
      skuId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: '商品规格Id',
      },
      name: {
        type: DataTypes.STRING(50),
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      default: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      tableName: 'goods_sku_img',
    }
  );
};
