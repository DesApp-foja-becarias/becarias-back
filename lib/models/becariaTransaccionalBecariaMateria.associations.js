import Becaria from './becaria';
import BecariaMateria from './becariaMateria';

export default function injectAssociations() {
  BecariaMateria.belongsTo(Becaria, {
    foreignKey: 'BecariaId',
    targetKey: 'id',
  });
  Becaria.hasMany(BecariaMateria, {
    as: 'MateriasDeBecaria',
    foreignKey: 'BecariaId',
    sourceKey: 'id',
  });
}
