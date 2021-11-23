'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BecariasMaterias', {
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
      MateriaId: {
        type: Sequelize.INTEGER,
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
