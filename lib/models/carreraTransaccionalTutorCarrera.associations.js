import Carrera from './carrera';
import TutorCarrera from './tutorCarrera';

export default function injectAssociations() {
  TutorCarrera.belongsTo(Carrera, {
    foreignKey: 'CarreraId',
    targetKey: 'id',
  });
  Carrera.hasMany(TutorCarrera, {
    as: 'TutoresEnCarrera',
    foreignKey: 'CarreraId',
    sourceKey: 'id',
  });
}
