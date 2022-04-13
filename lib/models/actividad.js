import { Model, DataTypes } from 'sequelize';

export default class Actividad extends Model {
  static init(sequelize) {
    return super.init(
      {
        name: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: 'Actividads',
        tableName: 'Actividads',
      }
    );
  }

  esTocayoDe(otraActividad) {
    return otraActividad.nombre === this.nombre;
  }
}
