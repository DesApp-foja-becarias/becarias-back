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
    res
      .status(404)
      .json({
        message: `No se encontró una actividad con id ${req.params.id}`,
      });
  }
};
