import { Model, DataTypes } from 'sequelize';

export default class BecariaActividad extends Model {
  static init(sequelize) {
    return super.init(
      {
        BecariaId: DataTypes.INTEGER,
        ActividadId: DataTypes.INTEGER,
        startDate: DataTypes.STRING,
        endDate: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: 'BecariasActividades',
        tableName: 'BecariasActividades',
      }
    );
  }
}
