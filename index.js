const { Sequelize, Op, QueryTypes } = require('sequelize');
const associate = require('./associations');

// 新建sequelize实例，分别传递参数'数据库名称', '连接账号', '密码', options
const sequelize = new Sequelize('online_store', 'ksharplee', '1985lee74', {
  host: 'localhost',
  dialect: 'mysql',
  // pool: {
  //   max: 5,
  //   min: 0,
  //   acquire: 30000,
  //   idle: 10000
  // },
  logging: false,
  timezone: '+08:00',
  // 记录日志 -- 显示所有日志函数调用参数
  // logging: (...msg) => console.log(msg)
});

const modelDefiners = [
  // 用户模块
  require('./models/userLogin'),
  require('./models/userRole'),
  require('./models/userProfile'),
  require('./models/userRank'),
  require('./models/userAddress'),
  // 系统模块
  require('./models/systemArea'),
  // 广告模块
  require('./models/systemAdPosition'),
  require('./models/systemAd'),
  // 文章模块
  require('./models/infoCategory'),
  require('./models/infoArticle'),
  // 平台模块
  require('./models/baseCate'),
  require('./models/baseCateGroup'),
  require('./models/baseCateBrand'),
  require('./models/baseCateAttr'),
  require('./models/baseCateAttrOption'),
  // 商品模块
  require('./models/goodsSpu'),
  require('./models/goodsSku'),
  require('./models/goodsSkuImg'),
  require('./models/goodsSpec'),
  require('./models/goodsSpecOption'),
  // 多对多连接表
  require('./models/mtmUserRole'),
  require('./models/mtmCateBrand'),
  require('./models/mtmSkuSpec'),
  require('./models/mtmCateAttr'),
];

modelDefiners.forEach(modelDefiner => modelDefiner(sequelize))

associate(sequelize);

// const inits = [
//   require('./init/initArea'),
//   require('./init/initRoles'),
//   require('./init/initUsers'),
// ];

(async () => {
  await sequelize.sync({ force: true });
  // await sequelize.sync({ alter: true });

  const mtmCateAttr = await sequelize.models.mtmCateAttr.findAll()
  console.log("函数 ~ file: index.js ~ line 68 ~ mtmCateAttr", JSON.stringify(mtmCateAttr, null, 2))
})()


module.exports = sequelize
