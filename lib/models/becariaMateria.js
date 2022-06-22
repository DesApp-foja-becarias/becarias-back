import { Model, DataTypes } from 'sequelize';

export default class BecariaMateria extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        BecariaId: DataTypes.INTEGER,
        MateriaId: DataTypes.INTEGER,
      },
      {
        sequelize,
        modelName: 'BecariasMaterias',
        tableName: 'BecariasMaterias',
      }
    );
  }
}
