import Carrera from '../models/carrera';

export const index = async (req, res) => {
  const carreras = await Carrera.findAll({});
  res.json({ data: carreras.map((carrera) => carrera.toJSON()) });
};

export const show = async (req, res) => {
  const carrera = await Carrera.findByPk(req.params.id);
  if (carrera) {
    res.json({ data: carrera.toJSON() });
  } else {
    res
      .status(404)
      .json({ message: `No se encontró una carrera con id ${req.params.id}` });
  }
};

export const add = async (req, res) => {
  const carreraData = req.body;
  const carrera = Carrera.build(carreraData);
  const dbResponse = await carrera.save();
  res.json(dbResponse);
};
