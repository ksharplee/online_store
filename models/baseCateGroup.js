const { DataTypes } = require('sequelize');
// 商品分类分组表 -- 首页分类分组展示
module.exports = (sequelize) => {
  sequelize.define(
    'baseCateGroup',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '分组名称'
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
      tableName: 'base_cate_group',
    }
  );
};
