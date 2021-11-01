'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Cuenta', [
      {
        banco: 'Galicia',
        titularDeCuenta: 'Pablo Marcelli',
        numeroDeCuenta: '3252A',
        cbu: '1008',
        tipoDeCuenta: 'Ahorro en pesos',
        sucursal: 'Haedo',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Cuenta', null, {});
  },
};
