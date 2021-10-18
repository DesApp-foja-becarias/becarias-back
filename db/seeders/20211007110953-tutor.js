'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Tutors', [
      {
        Apellido: 'Sanchez',
        Nombre: 'Laura',
        DNI: 25567890,
        Telefono: 1134567890,
        Direccion: 'Belgrano 789',
        Localidad: 'Moron',
        Correo: 'slaura@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Apellido: 'Perez',
        Nombre: 'Andres',
        DNI: 22456734,
        Telefono: 1134024567,
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
