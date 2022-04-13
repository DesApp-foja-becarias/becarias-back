import Becaria from './becaria';
import Tutor from './tutor';

export default function injectAssociations() {
  Becaria.belongsTo(Tutor);
  Tutor.hasMany(Becaria, { as: 'Becarias' });
}
