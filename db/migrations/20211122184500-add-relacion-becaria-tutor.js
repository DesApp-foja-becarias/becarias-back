'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Becaria', 'TutorId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Tutors',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: '',
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Becaria', 'TutorId');
  },
};
