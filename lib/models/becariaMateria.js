import { Model } from 'sequelize';

export default class BecariaMateria extends Model {
  static init(sequelize) {
    return super.init(
      {
        // no hay mas columnas que las de relacion
      },
      {
        sequelize,
        modelName: 'BecariasMaterias',
        tableName: 'BecariasMaterias',
      }
    );
  }
}
