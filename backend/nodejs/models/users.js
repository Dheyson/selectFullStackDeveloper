const bcypt = require('bcrypt');

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {});


  Users.beforeCreate(async (user, options) => {
    if (user.changed('password')) {
      const hashedPassword = await bcypt.hash(user.password, bcrypt.genSaltSync(10), null);
      user.password = hashedPassword;
    };
  });

  Users.prototype.comparePassword = function (paswd, cb) {
    bcypt.compare(paswd, this.password, function (err, isMatch) {
      return err ? cb(err) : cb(null, isMatch);
    })
  }

  Users.associate = function (models) {
    // Options onDelete CASCADE, allows to delete all posts related with the user
    Users.hasMany(models.Posts, { onDelete: 'CASCADE' });
  };

  // Allows to log in with a name(username) or email
  Users.findByLogin = async login => {
    let user = await Users.findOne({
      where: { username: login },
    });

    if (!user) {
      user = await Users.findOne({
        where: { email: login },
      });
    }
    return user;
  }
  return Users;
};
