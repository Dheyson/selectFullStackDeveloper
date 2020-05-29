'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // Posts belongs to Users
    return queryInterface.addColumn(
      'Posts', // User model ref
      'UserId', // New column name and key added
      {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        references: {
          model: 'Users', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onDelete: 'CASCADE',
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Posts', // name of Source model
      'UserId' // key we want to remove
    )
  }
};
