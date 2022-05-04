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
        weighing: DataTypes.STRING, //ponderacion -> año de alta como becaria
        announcement: DataTypes.STRING, //convocatoria -> año de inscripcion a becas
        CuentaId: DataTypes.INTEGER,
      },
      {
        sequelize,
        modelName: 'Becaria',
        tableName: 'Becaria',
      }
    );
  }
}
