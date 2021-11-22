'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Becaria', [
      {
        name: 'Juana',
        lastname: 'Azurduy',
        dni: '1231123',
        birthday: '1780-07-12',
        telephone: '46583214',
        address: 'Perón 3690',
        city: 'Ramos Mejía',
        country: 'Argentina',
        province: 'Buenos Aires',
        email: 'test@gmail.com',
        cuit: '12312432',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Usuarios', null, {});
  },
};
