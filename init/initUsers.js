const crypto = require('crypto');

const genPassword = (password) => {
  const salt = crypto.randomBytes(32).toString('hex');
  const hash = crypto
    .pbkdf2Sync(password, salt, 10000, 64, 'sha512')
    .toString('hex');
  return {
    salt,
    hash,
  };
};

const users = [
  {
    userName: 'administrator',
    roles: [1,2,3]
  },
  {
    userName: 'ksharplee',
    roles: [1]
  }
];

module.exports = async (sequelize) => {
  const user = sequelize.models.userLogin;

  const { hash, salt } = genPassword('123456');
  users.forEach(async usr => {
    const res = await user.create({
      userName: usr.userName,
      hash,
      salt,
    })
    await res.setUserRoles(usr.roles)
  })
}
