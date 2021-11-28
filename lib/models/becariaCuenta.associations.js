import Becaria from './becaria';
import Cuenta from './cuenta';

export default function injectAssociations() {
  Becaria.hasOne(Cuenta, { as: 'CuentaDeBecaria', foreignKey: 'BecariaId' });
  Cuenta.belongsTo(Becaria, { as: 'BecariaDeCuenta', foreignKey: 'BecariaId' });
}
