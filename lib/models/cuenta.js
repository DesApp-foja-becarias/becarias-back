import { Model, DataTypes } from 'sequelize';

export default class Cuenta extends Model {
  static init(sequelize) {
    return super.init(
      {
        bank: DataTypes.STRING,
        accountHolder: DataTypes.STRING,
        accountNumber: DataTypes.STRING,
        accountType: DataTypes.STRING,
        branchOffice: DataTypes.STRING,
        cbu: DataTypes.STRING,
        BecariaId: DataTypes.INTEGER,
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
