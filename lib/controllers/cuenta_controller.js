import Cuenta from '../models/cuenta';

export const index = async (req, res) => {
  const cuentas = await Cuenta.findAll({});
  res.json({ data: cuentas.map((cuenta) => cuenta.toJSON()) });
};

export const show = async (req, res) => {
  const cuenta = await Cuenta.findByPk(req.params.id);
  if (cuenta) {
    res.json({ data: cuenta.toJSON() });
  } else {
    res
      .status(404)
      .json({ message: `No se encontró un cuenta con id ${req.params.id}` });
  }
};
//POST
export const add = async (req, res) => {
  const cuentaData = req.body;
  const cuenta = Cuenta.build(cuentaData);
  const dbResponse = await cuenta.save();
  res.json(dbResponse);
};

//PUT
export const updateCuenta = async (req, res) => {
  const cuenta = await Cuenta.findByPk(req.params.id);
  if (cuenta) {
    cuenta
      .update(
        {
          bank: req.body.bank,
          accountHolder: req.body.accountHolder,
          accountNumber: req.body.accountNumber,
          accountType: req.body.accountType,
          branchOffice: req.body.branchOffice,
          cbu: req.body.cbu,
        },
        {
          where: {
            id: req.body.id,
          },
        }
      )
      .then(() =>
        res.json({
          message: 'Cuenta actualizada.',
        })
      )
      .catch(() =>
        res.json({
          message: 'Error al actualizar la cuenta',
        })
      );
  } else {
    res
      .status(404)
      .json({ message: `No se encontró la cuenta con id ${req.params.id}` });
  }
};

//DELETE
export const deleteCuenta = async (req, res) => {
  const cuenta = await Cuenta.findByPk(req.params.id);
  if (cuenta) {
    cuenta
      .destroy()
      .then(() =>
        res.json({
          message: 'Cuenta eliminada',
        })
      )
      .catch(() =>
        res.json({
          message: 'Error al intentar eliminar la cuenta',
        })
      );
  } else {
    res
      .status(404)
      .json({ message: `No se encontró la cuenta con id ${req.params.id}` });
  }
};
