import Tutor from './tutor';
import TutorCarrera from './tutorCarrera';

export default function injectAssociations() {
  TutorCarrera.belongsTo(Tutor, {
    foreignKey: 'TutorId',
    targetKey: 'id',
  });
  Tutor.hasMany(TutorCarrera, {
    as: 'carrerasDeTutor',
    foreignKey: 'TutorId',
    sourceKey: 'id',
  });
}
