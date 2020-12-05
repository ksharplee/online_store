const { DataTypes } = require('sequelize');
// 商品SPU图片
module.exports = (sequelize) => {
  sequelize.define(
    'goodsImg',
    {
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
      tableName: 'goods_img',
    }
  );
};
