import Becaria from './becaria';
import BecariaTutor from './becariaTutor';

export default function injectAssociations() {
  BecariaTutor.belongsTo(Becaria, {
    foreignKey: 'BecariaId',
    targetKey: 'id',
  });
  Becaria.hasMany(BecariaTutor, {
    as: 'BecariasTutor',
    foreignKey: 'BecariaId',
    sourceKey: 'id',
  });
}
