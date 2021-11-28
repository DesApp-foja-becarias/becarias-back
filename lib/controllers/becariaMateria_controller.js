import RelacionBecariaMateria from '../models/becariaMateria';

export const addBecariaMateria = async (req, res) => {
  const becariamateriaData = req.body;
  const becariaMateria = RelacionBecariaMateria.build(becariamateriaData);
  const dbResponse = await becariaMateria.save();
  res.json(dbResponse);
};
