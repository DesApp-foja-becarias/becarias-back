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
        email: 'test@gmail.com',
        cuit: '12312432',
        actualState: 'Aceptada',
        weighing: '2020/2021',
        announcement: '1',
        TutorId: 1,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Usuarios', null, {});
  },
};
