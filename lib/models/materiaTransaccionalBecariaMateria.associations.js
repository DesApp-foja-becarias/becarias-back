import Materia from './materia';
import BecariaMateria from './becariaMateria';

export default function injectAssociations() {
  BecariaMateria.belongsTo(Materia, {
    foreignKey: 'MateriaId',
    targetKey: 'id',
  });
  Materia.hasMany(BecariaMateria, {
    as: 'BecariasEnMateria',
    foreignKey: 'MateriaId',
    sourceKey: 'id',
  });
}
