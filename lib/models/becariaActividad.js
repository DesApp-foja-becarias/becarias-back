import { Model } from 'sequelize';

export default class BecariaActividad extends Model {
  static init(sequelize) {
    return super.init(
      {
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
