import { Model, DataTypes } from 'sequelize';

export default class Becaria extends Model {
  static init(sequelize) {
    return super.init(
      {
        nombre: DataTypes.STRING,
        apellido: DataTypes.STRING,
        dni: DataTypes.STRING,
        fechaNacimiento: DataTypes.DATE,
        telefono: DataTypes.INTEGER,
        direccion: DataTypes.STRING,
        localidad: DataTypes.STRING,
        correo: DataTypes.STRING,
        cuit: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: 'Becaria',
      }
    );
  }

  esTocayoDe(otroBecaria) {
    return otroBecaria.nombre === this.nombre;
  }
}
