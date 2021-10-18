import { Model, DataTypes } from 'sequelize';

export default class Materia extends Model {
  static init(sequelize) {
    return super.init(
      {
        nombre: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: 'Materia',
      }
    );
  }

  esTocayoDe(otraMateria) {
    return otraMateria.nombre === this.nombre;
  }
}
