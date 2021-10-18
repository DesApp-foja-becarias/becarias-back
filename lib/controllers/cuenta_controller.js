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

export const add = async (req, res) => {
  const cuentaData = req.body;
  const cuenta = Cuenta.build(cuentaData);
  const dbResponse = await cuenta.save();
  res.json(dbResponse);
};
