import Tutor from './tutor';
import TutorCarrera from './tutorCarrera';

export default function injectAssociations() {
  TutorCarrera.belongsTo(Tutor, {
    foreignKey: 'TutorId',
    targetKey: 'id',
  });
  Tutor.hasMany(TutorCarrera, {
    as: 'CarrerasDeTutor',
    foreignKey: 'TutorId',
    sourceKey: 'id',
  });
}
