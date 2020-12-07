const { DataTypes } = require('sequelize');
// 商品规格属性表
module.exports = (sequelize) => {
  sequelize.define(
    'goodsSpec',
    {
      spuId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: '商品Id',
      },
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      tableName: 'goods_spec',
    }
  );
};
