import { Model, DataTypes } from 'sequelize';

export default class BecariaTutor extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        BecariaId: DataTypes.INTEGER,
        TutorId: DataTypes.INTEGER,
      },
      {
        sequelize,
        modelName: 'BecariasTutors',
        tableName: 'BecariasTutors',
      }
    );
  }
}
