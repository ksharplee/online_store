const { DataTypes } = require('sequelize');
// 商品规格属性值表
module.exports = (sequelize) => {
  sequelize.define(
    'goodsSpecOption',
    {
      specId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: '商品规格属性Id',
      },
      option: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      tableName: 'goods_spec_option',
    }
  );
};
