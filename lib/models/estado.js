import { Model, DataTypes } from 'sequelize';

export default class Estado extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        actualState: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: 'Estado',
      }
    );
  }

  esTocayoDe(otroEstado) {
    return otroEstado.nombre === this.nombre;
  }
}
