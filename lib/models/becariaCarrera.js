import { Model } from 'sequelize';

export default class BecariaCarrera extends Model {
  static init(sequelize) {
    return super.init(
      {
        // no hay mas columnas que las de relacion
      },
      {
        sequelize,
        modelName: 'BecariasCarreras',
        tableName: 'BecariasCarreras',
      }
    );
  }
}
