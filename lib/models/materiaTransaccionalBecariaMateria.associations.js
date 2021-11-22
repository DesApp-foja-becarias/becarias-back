import Materia from './materia';
import BecariaMateria from './becariaMateria';

export default function injectAssociations() {
  BecariaMateria.belongsTo(Materia);
  Materia.hasMany(BecariaMateria, { as: 'Becarias' });
}
