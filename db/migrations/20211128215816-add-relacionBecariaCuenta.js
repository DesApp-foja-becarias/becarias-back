'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Becaria', 'CuentaId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Cuenta',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: '',
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Becaria', 'CuentaId');
  },
};
