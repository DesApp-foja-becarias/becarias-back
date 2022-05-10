'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BecariasMaterias', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      BecariaId: {
        type: Sequelize.UUID,
        references: {
          model: 'Becaria',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: '',
      },
      MateriaId: {
        type: Sequelize.UUID,
        references: {
          model: 'Materia',
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
    await queryInterface.dropTable('BecariasMaterias');
  },
};
