import { Model, DataTypes } from 'sequelize';

export default class TutorCarrera extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        TutorId: DataTypes.INTEGER,
        CarreraId: DataTypes.INTEGER,
      },
      {
        sequelize,
        modelName: 'TutoresCarreras',
        tableName: 'TutoresCarreras',
      }
    );
  }
}
