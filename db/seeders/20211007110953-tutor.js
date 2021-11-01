'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Tutors', [
      {
        surname: 'Sanchez',
        name: 'Laura',
        dni: '25567890',
        telephone: '1134567890',
        email: 'slaura@gmail.com',
        actualState: '123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Tutors', null, {});
  },
};
