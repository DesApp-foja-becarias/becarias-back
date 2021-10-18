import { Model, DataTypes } from 'sequelize';

export default class Tutor extends Model {
  static init(sequelize) {
    return super.init(
      {
        Apellido: DataTypes.STRING,
        Nombre: DataTypes.STRING,
        DNI: DataTypes.INTEGER,
        Telefono: DataTypes.INTEGER,
        Direccion: DataTypes.STRING,
        Localidad: DataTypes.STRING,
        Correo: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: 'Tutor',
      }
    );
  }
  esTocayoDe(otroTutor) {
    return otroTutor.nombre === this.nombre;
  }
}
