import Actividad from '../models/actividad';

export const index = async (req, res) => {
  const actividades = await Actividad.findAll({});
  res.json({ data: actividades.map((actividad) => actividad.toJSON()) });
};

export const show = async (req, res) => {
  const actividad = await Actividad.findByPk(req.params.id);
  if (actividad) {
    res.json({ data: actividad.toJSON() });
  } else {
    res.status(404).json({
      message: `No se encontró una actividad con id ${req.params.id}`,
    });
  }
};

export const add = async (req, res) => {
  const actividadData = req.body;
  const actividad = Actividad.build(actividadData);
  const dbResponse = await actividad.save();
  res.json(dbResponse);
};

//put Actividad
export const updateActividad = async (req, res) => {
  const actividad = await Actividad.findByPk(req.params.id);
  if (actividad) {
    actividad
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
      .then(() =>
        res.json({
          message: `Actividad actualizada`,
        })
      )
      .catch(() =>
        res.json({
          message: `Error al actualizar la actividad`,
        })
      );
  } else {
    res.status(404).json({
      message: `No se encontró una actividad con id ${req.params.id}`,
    });
  }
};

//delete Actividad
export const deleteActividad = async (req, res) => {
  const actividad = await Actividad.findByPk(req.params.id);
  if (actividad) {
    actividad
      .destroy({
        where: {
          id: req.params.id,
        },
      })
      .then(() =>
        res.json({
          message: `Actividad eliminada`,
        })
      )
      .catch(() =>
        res.json({
          message: `Error al eliminar la actividad`,
        })
      );
  } else {
    res.status(404).json({
      message: `No se encontró una actividad con id ${req.params.id}`,
    });
  }
};
