import { Model, DataTypes } from 'sequelize';

export default class Documento extends Model {
  static init(sequelize) {
    return super.init(
      {
        documentacion: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: 'Documento',
      }
    );
  }

  esTocayoDe(otroDocumento) {
    return otroDocumento.nombre === this.nombre;
  }
}
