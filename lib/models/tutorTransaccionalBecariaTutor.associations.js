import Tutor from './tutor';
import BecariasTutor from './becariasTutor';

export default function injectAssociations() {
  BecariasTutor.belongsTo(Tutor, {
    foreignKey: 'TutorId',
    targetKey: 'id',
  });
  Tutor.hasMany(BecariasTutor, {
    as: 'BecariasTutor',
    foreignKey: 'TutorId',
    sourceKey: 'id',
  });
}
