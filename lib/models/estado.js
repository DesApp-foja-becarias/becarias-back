import { Model, DataTypes } from 'sequelize';

export default class Estado extends Model {
  static init(sequelize) {
    return super.init(
      {
        estadoActual: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: 'Estado',
      }
    );
  }

  esTocayoDe(otroEstado) {
    return otroEstado.nombre === this.nombre;
  }
}
