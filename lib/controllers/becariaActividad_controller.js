import RelacionBecariaActividad from '../models/becariaActividad';

export const addBecariaActividad = async (req, res) => {
  const becariaactividadData = req.body;
  const becariaActividad = RelacionBecariaActividad.build(becariaactividadData);
  const dbResponse = await becariaActividad.save();
  res.json(dbResponse);
};

export const addBecariasAActividad = async (req, res) => {
  const actividad = req.body.ActividadId;
  const listBecariasData = req.body.Becarias;
  let result = '';
  for (let i = 0; i < listBecariasData.length; i++) {
    let relacion = JSON.parse(
      JSON.stringify({ BecariaId: listBecariasData[i], ActividadId: actividad })
    );
    let becariaactividad = RelacionBecariaActividad.build(relacion);
    const dbResponse = await becariaactividad.save();
    result = [...result, dbResponse];
  }
  res.json(result);
};

export const getBecariasEnActividad = async (req, res) => {
  const becarias = await RelacionBecariaActividad.findAll({
    where: { BecariaId: req.params.id },
  }).catch(() =>
    res.json({ message: `No se encontró una becaria con id ${req.params.id}` })
  );
  res.json({ data: becarias.map((becaria) => becaria.toJSON()) });
};

export const getActividadesDeBecarias = async (req, res) => {
  const actividades = await RelacionBecariaActividad.findAll({
    where: { ActividadId: req.params.id },
  }).catch(() =>
    res.json({
      message: `No se encontró una actividad con id ${req.params.id}`,
    })
  );
  res.json({ data: actividades.map((actividad) => actividad.toJSON()) });
};
