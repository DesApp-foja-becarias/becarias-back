'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Cuenta', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      bank: {
        type: Sequelize.STRING,
      },
      accountHolder: {
        type: Sequelize.STRING,
      },
      accountNumber: {
        type: Sequelize.STRING,
      },
      accountType: {
        type: Sequelize.STRING,
      },
      branchOffice: {
        type: Sequelize.STRING,
      },
      cbu: {
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
    await queryInterface.dropTable('Cuenta');
  },
};
