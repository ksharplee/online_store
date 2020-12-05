const { DataTypes } = require('sequelize')
// 用户登录信息表
// We export a function that defines the model.
// This function will automatically receive as parameter the Sequelize connection object.
module.exports = (sequelize) => {
  sequelize.define(
    'userLogin',
    {
      // The following specification of the 'id' attribute could be omitted
      // since it is the default.
      // userId: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      //   autoIncrement: true,
      //   primaryKey: true,
      // },
      userName: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
      },
      hash: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      salt: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      question: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      answer: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1,
        comment: '1.启用 0.停用',
      },
    },
    {
      tableName: 'user_login',
    },
    {
      indexes: [
        {
          fields: ['userName'],
        },
      ],
    }
  );
}
