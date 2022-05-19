import { Model, DataTypes } from 'sequelize';

export default class Carrera extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        name: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: 'Carrera',
      }
    );
  }

  esTocayoDe(otroCarrera) {
    return otroCarrera.nombre === this.nombre;
  }
}
