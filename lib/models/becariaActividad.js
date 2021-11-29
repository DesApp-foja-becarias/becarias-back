import { Model, DataTypes } from 'sequelize';

export default class BecariaActividad extends Model {
  static init(sequelize) {
    return super.init(
      {
        BecariaId: DataTypes.INTEGER,
        ActividadId: DataTypes.INTEGER,
        startDate: DataTypes.STRING,
        endDate: DataTypes.STRING,
        // no hay mas columnas que las de relacion
      },
      {
        sequelize,
        modelName: 'BecariasActividades',
        tableName: 'BecariasActividades',
      }
    );
  }
}
