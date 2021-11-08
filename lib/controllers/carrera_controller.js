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

//PUT
export const updateCarrera = async (req, res) => {
  const carrera = await Carrera.findByPk(req.params.id);
  if (carrera) {
    carrera
      .update(
        {
          name: req.body.name,
        },
        {
          where: {
            id: req.body.id,
          },
        }
      )
      .then(() =>
        res.json({
          message: 'Carrera actualizada.',
        })
      )
      .catch(() =>
        res.json({
          message: 'Error al actualizar la Carrera',
        })
      );
  } else {
    res
      .status(404)
      .json({
        message: `No se encontró la carrera con el id ${req.params.id}`,
      });
  }
};

//DELETE
export const deleteCarrera = async (req, res) => {
  const carrera = await Carrera.findByPk(req.params.id);
  if (carrera) {
    carrera
      .destroy()
      .then(() =>
        res.json({
          message: 'Carrera eliminada',
        })
      )
      .catch(() =>
        res.json({
          message: 'Error al intentar eliminar la Carrera',
        })
      );
  } else {
    res
      .status(404)
      .json({
        message: `No se encontró la carrera con el id ${req.params.id}`,
      });
  }
};
