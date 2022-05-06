import { Model, DataTypes } from 'sequelize';

export default class BecariaTutor extends Model {
  static init(sequelize) {
    return super.init(
      {
        BecariaId: DataTypes.INTEGER,
        TutorId: DataTypes.INTEGER,
      },
      {
        sequelize,
        modelName: 'BecariasTutores',
        tableName: 'BecariasTutores',
      }
    );
  }
}
