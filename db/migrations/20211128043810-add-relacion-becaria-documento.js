'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Documentos', 'BecariaId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Becaria',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: '',
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Documentos', 'BecariaId');
  },
};
