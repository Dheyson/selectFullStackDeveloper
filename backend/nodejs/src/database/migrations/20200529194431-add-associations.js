'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // Posts belongs to Users
    return queryInterface.addColumn(
      'posts', // User model ref
      'userId', // New column name and key added
      {
        type: Sequelize.INTEGER,
        autoIncrement: false,
        references: {
          model: 'users', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onDelete: 'CASCADE',
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'posts', // name of Source model
      'userId' // key we want to remove
    )
  }
};
