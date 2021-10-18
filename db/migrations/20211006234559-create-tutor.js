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
      Apellido: {
        type: Sequelize.STRING,
      },
      Nombre: {
        type: Sequelize.STRING,
      },
      DNI: {
        type: Sequelize.INTEGER,
      },
      Telefono: {
        type: Sequelize.INTEGER,
      },
      Direccion: {
        type: Sequelize.STRING,
      },
      Localidad: {
        type: Sequelize.STRING,
      },
      Correo: {
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
