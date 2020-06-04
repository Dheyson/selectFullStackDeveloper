'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING(30),
        unique: true,
        allowNull: false,
        validate: {
          notEmpty: true,
          len: {
            args: [0, 6]
          }
        }
      },
      email: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
        }
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
