import Becaria from './becaria';
import Cuenta from './cuenta';

export default function injectAssociations() {
  Becaria.belongsTo(Cuenta, { as: 'CuentaDeBecaria', foreignKey: 'CuentaId' });
  Cuenta.hasOne(Becaria, { as: 'BecariaDeCuenta', foreignKey: 'CuentaId' });
}
