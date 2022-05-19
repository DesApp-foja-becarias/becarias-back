import { Model, DataTypes } from 'sequelize';

export default class Documento extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        documentation: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: 'Documentos',
      }
    );
  }

  esTocayoDe(otroDocumento) {
    return otroDocumento.nombre === this.nombre;
  }
}
