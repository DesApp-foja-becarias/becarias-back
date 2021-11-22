import Becaria from './becaria';
import Materia from './materia';
//import BecariaMateria from './becariaMateria';
/*
export default function injectAssociations() {
  BecariaMateria.belongsTo(Becaria);
  Becaria.hasMany(BecariaMateria, { as: 'Materia' });
}*/

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
