const { Sequelize } = require('sequelize')
const associate = require('./associations');
const area = require('./data/area');

// 新建sequelize实例，分别传递参数'数据库名称', '连接账号', '密码', options
const sequelize = new Sequelize('online_store', 'ksharplee', '1985lee74', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  logging: false
  // 记录日志 -- 显示所有日志函数调用参数
  // logging: (...msg) => console.log(msg)
})

const modelDefiners = [
  // 用户模块
  require('./models/userLogin'),
  require('./models/userRole'),
  require('./models/userProfile'),
  require('./models/userRank'),
  require('./models/userAddress'),
  require('./models/systemArea'),
  // 广告模块
  require('./models/systemAdPosition'),
  require('./models/systemAd'),
  // 文章模块
  require('./models/infoCategory'),
  require('./models/infoArticle'),
];

modelDefiners.forEach(modelDefiner => modelDefiner(sequelize))

associate(sequelize)

const provinces = area.province_list;
const cities = area.city_list;
const counties = area.county_list;
(async () => {
  await sequelize.sync({ force: true });

  const Area = sequelize.models.systemArea;
  const Role = sequelize.models.userRole;

  for (const key in provinces) {
    Area.create({
      areaId: key,
      areaName: provinces[key],
      areaType: 1,
    });
  }

  for (const key in cities) {
    Area.create({
      areaId: key,
      areaName: cities[key],
      areaType: 2,
    });
  }

  for (const key in counties) {
    Area.create({
      areaId: key,
      areaName: counties[key],
      areaType: 3,
    });
  }

  // 角色
  const roles = [
    { type: 0, name: '采购商' },
    { type: 1, name: '供应商' },
    { type: 2, name: '管理员' },
  ];

  roles.forEach(role => {
    Role.create(role)
  });
})()


module.exports = sequelize
