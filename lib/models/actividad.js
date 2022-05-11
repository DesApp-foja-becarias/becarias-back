import { Model, DataTypes } from 'sequelize';

export default class Actividad extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
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
