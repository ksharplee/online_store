const { DataTypes } = require('sequelize');
// 商品规格属性表
module.exports = (sequelize) => {
  sequelize.define(
    'goodsSpecAttr',
    {
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      tableName: 'goods_spec_attr',
    }
  );
};
