import RelacionTutorMateria from '../models/tutorMateria';

export const addTutorMateria = async (req, res) => {
  const tutorMateriaData = req.body;
  const tutorMateria = RelacionTutorMateria.build(tutorMateriaData);
  const dbResponse = await tutorMateria.save();
  res.json(dbResponse);
};
