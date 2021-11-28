import Becaria from './becaria';
import Documento from './documento';

export default function injectAssociations() {
  Documento.belongsTo(Becaria);
  Becaria.hasMany(Documento, { as: 'Documentos' });
}
