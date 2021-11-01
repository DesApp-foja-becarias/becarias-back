'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Becaria', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      surname: {
        type: Sequelize.STRING,
      },
      dni: {
        type: Sequelize.STRING,
      },
      birthday: {
        type: Sequelize.DATE,
      },
      telephone: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      country: {
        type: Sequelize.STRING,
      },
      province: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      cuit: {
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
    await queryInterface.dropTable('Becaria');
  },
};
