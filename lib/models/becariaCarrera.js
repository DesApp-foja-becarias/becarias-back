import { Model, DataTypes } from 'sequelize';

export default class BecariaCarrera extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
      },
      {
        sequelize,
        modelName: 'BecariasCarreras',
        tableName: 'BecariasCarreras',
      }
    );
  }
}
