const { DataTypes } = require('sequelize');
// 平台属性值表
module.exports = (sequelize) => {
  sequelize.define(
    'baseCateAttrOption',
    {
      attrId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: '平台属性Id',
      },
      option: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      isUsing: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1,
        comment: '是否在搜索时启用,默认为是',
      },
    },
    {
      tableName: 'base_cate_attr_option',
    }
  );
};
