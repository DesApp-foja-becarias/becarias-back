'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tutors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      surname: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      dni: {
        type: Sequelize.STRING,
      },
      telephone: {
        type: Sequelize.STRING,
      },
      Direccion: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      actualState: {
        type: Sequelize.STRING,
      },
      scholar: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('Tutors');
  },
};
