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
      banco: {
        type: Sequelize.STRING,
      },
      titularDeCuenta: {
        type: Sequelize.STRING,
      },
      numeroDeCuenta: {
        type: Sequelize.STRING,
      },
      cbu: {
        type: Sequelize.STRING,
      },
      tipoDeCuenta: {
        type: Sequelize.STRING,
      },
      sucursal: {
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
