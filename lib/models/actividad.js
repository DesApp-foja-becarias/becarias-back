import { Model, DataTypes } from 'sequelize';

export default class Actividad extends Model {
  static init(sequelize) {
    return super.init(
      {
        name: DataTypes.STRING,
        startDate: DataTypes.DATE,
        endDate: DataTypes.DATE,
        description: DataTypes.STRING,
        validity: DataTypes.BOOLEAN,
      },
      {
        sequelize,
        modelName: 'Actividads',
        tableName: 'Actividads',
      }
    );
  }
}
