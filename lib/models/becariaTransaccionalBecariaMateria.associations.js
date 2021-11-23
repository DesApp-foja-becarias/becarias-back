import Becaria from './becaria';
//import Materia from './materia';
import BecariaMateria from './becariaMateria';

export default function injectAssociations() {
  BecariaMateria.belongsTo(Becaria);
  Becaria.hasMany(BecariaMateria, { as: 'BecariaMateria' });
}
/*
export default function injectAssociations() {
  Becaria.belongsToMany(Materia, {
    through: 'Becarias_Materias',
    foreignKey: 'materiaId',
  });
  Materia.belongsToMany(Becaria, {
    through: 'Becarias_Materias',
    foreignKey: 'becariaId',
  });
}
*/
