import Materia from './materia';
import TutorMateria from './tutorMateria';

export default function injectAssociations() {
  TutorMateria.belongsTo(Materia, {
    foreignKey: 'MateriaId',
    targetKey: 'id',
  });
  Materia.hasMany(TutorMateria, {
    as: 'TutoresEnMaterias',
    foreignKey: 'MateriaId',
    sourceKey: 'id',
  });
}
