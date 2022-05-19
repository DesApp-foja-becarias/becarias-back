'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('TutoresCarreras', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
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
      CarreraId: {
        type: Sequelize.UUID,
        references: {
          model: 'Carreras',
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
    await queryInterface.dropTable('TutoresCarreras');
  },
};
