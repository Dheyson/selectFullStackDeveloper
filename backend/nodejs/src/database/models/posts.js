'use strict';
module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define('posts', {
    post_title: DataTypes.STRING,
    post_content: DataTypes.STRING,
    publish_date: DataTypes.DATE
  }, {});
  Posts.associate = function(models) {
    Posts.belongsTo(models.users);
  };
  return Posts;
};
