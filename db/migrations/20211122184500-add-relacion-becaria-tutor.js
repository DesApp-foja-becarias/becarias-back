'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BecariasTutors', {
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
      TutorId: {
        type: Sequelize.UUID,
        references: {
          model: 'Tutors',
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
    return queryInterface.dropTable('BecariasTutors');
  },
};
