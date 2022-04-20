'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Actividads', [
      {
        name: 'Un estudiante, un compañero',
        startDate: '2020-11-01',
        endDate: '2020-11-30',
        description: 'Acompañamiento a un ingresante de la carrera',
        validity: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Actividads', null, {});
  },
};
