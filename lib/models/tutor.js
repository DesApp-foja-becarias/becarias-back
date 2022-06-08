import { Model, DataTypes } from 'sequelize';

export default class Tutor extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        lastname: DataTypes.STRING,
        name: DataTypes.STRING,
        dni: DataTypes.STRING,
        telephone: DataTypes.STRING,
        email: DataTypes.STRING,
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
