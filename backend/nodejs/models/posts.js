'use strict';
module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define('Posts', {
    post_title: DataTypes.STRING,
    post_content: DataTypes.STRING,
    publish_date: DataTypes.DATE
  }, {});
  Posts.associate = function(models) {
    Posts.belongsTo(models.Users);
  };
  return Posts;
};
