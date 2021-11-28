import Becaria from './becaria';
import BecariaCarrera from './becariaCarrera';

export default function injectAssociations() {
  BecariaCarrera.belongsTo(Becaria, {
    foreignKey: 'BecariaId',
    targetKey: 'id',
  });
  Becaria.hasMany(BecariaCarrera, {
    as: 'CarrerasDeBecaria',
    foreignKey: 'CarreraId',
    sourceKey: 'id',
  });
}
