'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'John Doe',
          email: 'john@email.com',
          role: 'admin',
          uuid: '35cf1b89-56d3-433c-9f43-4198eb3725de',
          createdAt: '2020-11-01T16:30:07.592Z',
          updatedAt: '2020-11-01T16:30:07.592Z'
        },
        {
          name: 'Jane Doe',
          email: 'jane@email.com',
          role: 'user',
          uuid: '35cf1b90-60d3-423c-1043-4198ebxd25de',
          createdAt: '2020-11-01T16:30:07.592Z',
          updatedAt: '2020-11-01T16:30:07.592Z'
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  }
};
