import RelacionBecariaCarrera from '../models/becariaCarrera';

export const addBecariaCarrera = async (req, res) => {
  const becariacarreraData = req.body;
  const becariaCarrera = RelacionBecariaCarrera.build(becariacarreraData);
  const dbResponse = await becariaCarrera.save();
  res.json(dbResponse);
};
