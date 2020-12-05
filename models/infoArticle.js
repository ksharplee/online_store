const { DataTypes } = require('sequelize');
// 文章信息表
module.exports = (sequelize) => {
  sequelize.define(
    'infoArticle',
    {
      title: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      decription: {
        type: DataTypes.STRING,
      },
      content: {
        type: DataTypes.STRING,
      },
      isUsing: {
        type: DataTypes.TINYINT,
        defaultValue: 1,
        allowNull: false,
        comment: '是否启用,默认为是',
      },
      sort: {
        type: DataTypes.INTEGER,
        defaultValue: 99,
        allowNull: false,
      },
    },
    {
      tableName: 'info_article',
    },
    {
      indexes: [
        {
          fields: ['title'],
        },
      ],
    }
  );
};
