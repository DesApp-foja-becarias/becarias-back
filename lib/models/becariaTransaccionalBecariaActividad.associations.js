import Becaria from './becaria';
import BecariaActividad from './becariaActividad';

export default function injectAssociations() {
  BecariaActividad.belongsTo(Becaria, {
    foreignKey: 'BecariaId',
    targetKey: 'id',
  });
  Becaria.hasMany(BecariaActividad, {
    as: 'ActividadesDeBecaria',
    foreignKey: 'BecariaId',
    sourceKey: 'id',
  });
}
