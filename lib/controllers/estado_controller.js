import Estado from '../models/estado';

export const index = async (req, res) => {
  const estados = await Estado.findAll({});
  res.json({ data: estados.map((estado) => estado.toJSON()) });
};

export const show = async (req, res) => {
  const estado = await Estado.findByPk(req.params.id);
  if (estado) {
    res.json({ data: estado.toJSON() });
  } else {
    res
      .status(404)
      .json({ message: `No se encontró un estado con id ${req.params.id}` });
  }
};
