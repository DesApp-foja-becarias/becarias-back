'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Tutores', [
      {
        Apellido: 'Sanchez',
        Nombre: 'Laura',
        DNI: '25.567.890',
        Telefono: '11-34567890',
        Direccion: 'Belgrano 789',
        Localidad: 'Moron',
        Correo: 'slaura@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Apellido: 'Perez',
        Nombre: 'Andres',
        DNI: '22.456.734',
        Telefono: '11-34024567',
        Direccion: 'Bolivar 340',
        Localidad: 'Lanus',
        Correo: 'andresp@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Tutores', null, {});
  },
};
