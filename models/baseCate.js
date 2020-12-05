const { DataTypes } = require('sequelize');
// 商品分类表
module.exports = (sequelize) => {
  sequelize.define(
    'baseCate',
    {
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      img: {
        type: DataTypes.STRING,
      },
      parentId: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      parentPath: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      decription: {
        type: DataTypes.STRING,
      },
      isUsing: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1,
        comment: '是否启用,默认为是'
      },
      level: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1,
        comment: '分类等级，默认1级'
      },
      leaf: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1,
        comment: '分类是否为叶子节点(即最后一级),默认为是'
      },
      inGroupTitle: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0,
        comment: '是否作为分类分组标题显示,默认为否'
      },
      sort: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 99,
      },
    },
    {
      tableName: 'base_cate',
    }
  );
};
