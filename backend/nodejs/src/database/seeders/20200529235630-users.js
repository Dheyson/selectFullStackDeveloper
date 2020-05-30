'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('users',
    [
      {
        username: 'Test',
        email: 'test@medium.com',
        password_hash: '9ff7b641722c30acdc058f2499d97dd8',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {}),
  down: (queryInterface, Sequelize) =>  queryInterface.bulkDelete('users', null, {})

}

