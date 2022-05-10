import { Model, DataTypes } from 'sequelize';

export default class Materia extends Model {
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
        modelName: 'Materia',
      }
    );
  }

  esTocayoDe(otraMateria) {
    return otraMateria.nombre === this.nombre;
  }
}
