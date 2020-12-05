// 表关系定义

module.exports = (sequelize) => {
  const Models = sequelize.models;

  // 文章类别与文章一对多
  Models.infoCategory.hasMany(Models.infoArticle, {
    foreignKey: 'categoryId',
    onDelete: 'CASCADE',
  });
  Models.infoArticle.belongsTo(Models.infoCategory, {
    foreignKey: 'categoryId',
    onDelete: 'RESTRICT',
  });
  // 用户等级与用户信息一对多
  Models.userRank.hasMany(Models.userProfile, {
    foreignKey: 'rankId',
    onDelete: 'CASCADE',
  });
  Models.userProfile.belongsTo(Models.userRank, {
    foreignKey: 'rankId',
    onDelete: 'RESTRICT',
  });
  // 用户与用户信息一对一
  Models.userLogin.hasOne(Models.userProfile, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
  });
  Models.userProfile.belongsTo(Models.userLogin, {
    foreignKey: 'userId',
    onDelete: 'RESTRICT',
  });
  // 用户与角色多对多
  Models.userLogin.belongsToMany(Models.userRole, {
    through: 'mtm_user_role',
    onDelete: 'RESTRICT',
  });
  Models.userRole.belongsToMany(Models.userLogin, {
    through: 'mtm_user_role',
    onDelete: 'RESTRICT',
  });
  // 用户信息与用户收货地址一对多
  Models.userProfile.hasMany(Models.userAddress, {
    foreignKey: 'profileId',
    onDelete: 'CASCADE',
  });
  Models.userAddress.belongsTo(Models.userProfile, {
    foreignKey: 'profileId',
    onDelete: 'RESTRICT',
  });
  // 广告位置与广告一对多
  Models.systemAdPosition.hasMany(Models.systemAd, {
    foreignKey: 'positionId',
    onDelete: 'CASCADE',
  });
  Models.systemAd.belongsTo(Models.systemAdPosition, {
    foreignKey: 'positionId',
    onDelete: 'RESTRICT',
  });
  // 商品分类与品牌多对多
  Models.baseCate.belongsToMany(Models.baseCateBrand, {
    through: 'mtm_cate_brand',
    onDelete: 'RESTRICT',
  });
  Models.baseCateBrand.belongsToMany(Models.baseCate, {
    through: 'mtm_cate_brand',
    onDelete: 'RESTRICT',
  });
  // 商品分类分组与商品分类一对多
  // 商品分类与平台属性一对多
  // 平台属性与平台属性值一对多
  // 商品分类与商品SPU一对多
  // 商品规格属性与商品规格值一对多
  // 商品SPU与商品SKU一对多
  // 商品SPU与商品规格属性一对多
  // 商品SPU与商品规格一对多
  // 商品SKU与商品图片一对多
  // 商品SKU与商品规格属性一对多
}
