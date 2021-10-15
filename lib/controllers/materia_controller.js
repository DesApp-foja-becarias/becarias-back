import Materia from '../models/materia';

export const index = async (req, res) => {
  const materias = await Materia.findAll({});
  res.json({ data: materias.map((materia) => materia.toJSON()) });
};

export const show = async (req, res) => {
  const materia = await Materia.findByPk(req.params.id);
  if (materia) {
    res.json({ data: materia.toJSON() });
  } else {
    res
      .status(404)
      .json({ message: `No se encontró un materia con id ${req.params.id}` });
  }
};
