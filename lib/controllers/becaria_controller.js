import Becaria from '../models/becaria';

export const index = async (req, res) => {
  const becarias = await Becaria.findAll({});
  res.json({ data: becarias.map((becaria) => becaria.toJSON()) });
};

export const show = async (req, res) => {
  const becaria = await Becaria.findByPk(req.params.id);
  if (becaria) {
    res.json({ data: becaria.toJSON() });
  } else {
    res
      .status(404)
      .json({ message: `No se encontró una becaria con id ${req.params.id}` });
  }
};
