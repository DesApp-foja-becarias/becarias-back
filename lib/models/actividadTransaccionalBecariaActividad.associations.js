import Actividad from './actividad';
import BecariaActividad from './becariaActividad';

export default function injectAssociations() {
  BecariaActividad.belongsTo(Actividad, {
    foreignKey: 'ActividadId',
    targetKey: 'id',
  });
  Actividad.hasMany(BecariaActividad, {
    as: 'BecariasEnActividad',
    foreignKey: 'ActividadId',
    sourceKey: 'id',
  });
}
