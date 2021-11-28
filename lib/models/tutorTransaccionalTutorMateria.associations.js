import Tutor from './tutor';
import TutorMateria from './tutorMateria';

export default function injectAssociations() {
  TutorMateria.belongsTo(Tutor, {
    foreignKey: 'TutorId',
    targetKey: 'id',
  });
  Tutor.hasMany(TutorMateria, {
    as: 'MateriasDeTutor',
    foreignKey: 'TutorId',
    sourceKey: 'id',
  });
}
