import { Model, DataTypes } from 'sequelize';

export default class Becaria extends Model {
  static init(sequelize) {
    return super.init(
      {
        name: DataTypes.STRING,
        lastname: DataTypes.STRING,
        dni: DataTypes.STRING,
        birthday: DataTypes.DATE,
        telephone: DataTypes.STRING,
        address: DataTypes.STRING,
        city: DataTypes.STRING,
        email: DataTypes.STRING,
        cuit: DataTypes.STRING,
        actualState: DataTypes.STRING, //pendiente, aceptada, cancelada, en espera
        weighing: DataTypes.STRING, //ponderacion -> 1,2,3
        announcement: DataTypes.STRING, //convocatoria -> 2020/2021
      },
      {
        sequelize,
        modelName: 'Becaria',
        tableName: 'Becaria',
      }
    );
  }
}
