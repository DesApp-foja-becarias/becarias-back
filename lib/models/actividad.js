import { Model, DataTypes } from 'sequelize';

export default class Actividad extends Model {
  static init(sequelize) {
    return super.init(
      {
        name: DataTypes.STRING,
        startDate: DataTypes.STRING,
        endDate: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: 'Actividad',
      }
    );
  }

  esTocayoDe(otraActividad) {
    return otraActividad.nombre === this.nombre;
  }
}
