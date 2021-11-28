'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Cuenta', [
      {
        bank: 'Galicia',
        accountHolder: 'Pablo Marcelli',
        accountNumber: '3252A',
        accountType: 'Ahorro en pesos',
        branchOffice: 'Haedo',
        cbu: '1008',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Cuenta', null, {});
  },
};
