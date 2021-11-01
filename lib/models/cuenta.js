import { Model, DataTypes } from 'sequelize';

export default class Cuenta extends Model {
  static init(sequelize) {
    return super.init(
      {
        banco: DataTypes.STRING,
        titularDeCuenta: DataTypes.STRING,
        numeroDeCuenta: DataTypes.STRING,
        cbu: DataTypes.STRING,
        tipoDeCuenta: DataTypes.STRING,
        sucursal: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: 'Cuenta',
      }
    );
  }

  esTocayoDe(otroCuenta) {
    return otroCuenta.nombre === this.nombre;
  }
}
