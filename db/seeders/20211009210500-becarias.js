'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Becaria', [
      {
        nombre: 'Juana',
        apellido: 'Azurduy',
        dni: '1231123',
        fechaNacimiento: '1780-07-12',
        telefono: '46583214',
        direccion: 'Perón 3690',
        localidad: 'Ramos Mejía',
        correo: 'test@gmail.com',
        cuit: '12312432',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Usuarios', null, {});
  },
};
