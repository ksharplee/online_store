const { DataTypes } = require('sequelize');
// 商品SPU表
module.exports = (sequelize) => {
  sequelize.define(
    'goodsSpu',
    {
      cateId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: '商品类别Id',
      },
      name: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      descDetail: {
        type: DataTypes.STRING,
        comment: '商品详情',
      },
      sales: {
        type: DataTypes.INTEGER,
      },
      comments: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: 'goods_spu',
    }
  );
};
