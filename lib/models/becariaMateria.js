import { Model, DataTypes } from 'sequelize';

export default class BecariaMateria extends Model {
  static init(sequelize) {
    return super.init(
      {
        BecariaID: DataTypes.INTEGER,
        MateriaID: DataTypes.INTEGER,
      },
      {
        sequelize,
        modelName: 'BecariaMateria',
      }
    );
  }

  esTocayoDe(otraBecariaMateria) {
    return otraBecariaMateria.nombre === this.nombre;
  }
}
