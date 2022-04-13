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

export const add = async (req, res) => {
  const materiaData = req.body;
  const materia = Materia.build(materiaData);
  const dbResponse = await materia.save();
  res.json(dbResponse);
};

//put materia
export const updateMateria = async (req, res) => {
  const materia = await Materia.findByPk(req.params.id);
  if (materia) {
    materia
      .update(
        {
          name: req.body.name,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      )
      .then(() => {
        res.json({ message: 'Materia actualizada' });
      })
      .catch(() => res.json({ message: 'No se pudo actualizar la materia' }));
  } else {
    res
      .status(404)
      .json({ message: `No se encontró un materia con id ${req.params.id}` });
  }
};

//delete materia
export const deleteMateria = async (req, res) => {
  const materia = await Materia.findByPk(req.params.id);
  if (materia) {
    materia
      .destroy({
        where: {
          id: req.params.id,
        },
      })
      .then(() => {
        res.json({ message: 'Materia eliminada' });
      })
      .catch(() =>
        res.json({
          message: 'No se pudo eliminar la materia',
        })
      );
  } else {
    res
      .status(404)
      .json({ message: `No se encontró un materia con id ${req.params.id}` });
  }
};
