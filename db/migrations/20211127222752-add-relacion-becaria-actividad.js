'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BecariasActividades', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      BecariaId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Becaria',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: '',
      },
      ActividadId: {
        type: Sequelize.UUID,
        references: {
          model: 'Actividads',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: '',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('BecariasActividades');
  },
};
