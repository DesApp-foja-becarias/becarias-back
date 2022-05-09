import { Model, DataTypes } from 'sequelize';

export default class Tutor extends Model {
  static init(sequelize) {
    return super.init(
      {
        lastname: DataTypes.STRING,
        name: DataTypes.STRING,
        dni: DataTypes.STRING,
        telephone: DataTypes.STRING,
        email: DataTypes.STRING,
        actualState: DataTypes.STRING,
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
