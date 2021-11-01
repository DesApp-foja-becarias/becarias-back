import { Model, DataTypes } from 'sequelize';

export default class Becaria extends Model {
  static init(sequelize) {
    return super.init(
      {
        name: DataTypes.STRING,
        surname: DataTypes.STRING,
        dni: DataTypes.STRING,
        birthday: DataTypes.DATE,
        telephone: DataTypes.STRING,
        address: DataTypes.STRING,
        city: DataTypes.STRING,
        country: DataTypes.STRING,
        province: DataTypes.STRING,
        email: DataTypes.STRING,
        cuit: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: 'Becaria',
      }
    );
  }

  esTocayoDe(otroBecaria) {
    return otroBecaria.nombre === this.nombre;
  }
}
