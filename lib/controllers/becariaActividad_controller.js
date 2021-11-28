import RelacionBecariaActividad from '../models/becariaActividad';

export const addBecariaActividad = async (req, res) => {
  const becariaactividadData = req.body;
  const becariaActividad = RelacionBecariaActividad.build(becariaactividadData);
  const dbResponse = await becariaActividad.save();
  res.json(dbResponse);
};
