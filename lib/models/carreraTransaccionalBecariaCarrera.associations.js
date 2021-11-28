import Carrera from './carrera';
import BecariaCarrera from './becariaCarrera';

export default function injectAssociations() {
  BecariaCarrera.belongsTo(Carrera, {
    foreignKey: 'CarreraId',
    targetKey: 'id',
  });
  Carrera.hasMany(BecariaCarrera, {
    as: 'BecariasEnCarrera',
    foreignKey: 'CarreraId',
    sourceKey: 'id',
  });
}
