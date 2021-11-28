import Becaria from './becaria';
import Documento from './documento';

export default function injectAssociations() {
  Documento.belongsTo(Becaria, { as: 'Becaria', foreignKey: 'BecariaId' });
  Becaria.hasMany(Documento, { as: 'Documentos', foreignKey: 'BecariaId' });
}
