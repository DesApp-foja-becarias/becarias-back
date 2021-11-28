'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Carreras', [
      {
        name: 'Ingeniería Eléctrica',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Tecnicatura Univ. en Energia Electrica',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Licenciatura en Informática',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Tecnicatura Univ. en Informática',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ingeniería Metalúrgica',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Tecnicatura Univ. en Metalurgica',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Carreras', null, {});
  },
};
