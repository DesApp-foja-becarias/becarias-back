import RelacionTutorCarrera from '../models/tutorCarrera';

export const addTutorCarrera = async (req, res) => {
  const tutorCarreraData = req.body;
  const tutorCarrera = RelacionTutorCarrera.build(tutorCarreraData);
  const dbResponse = await tutorCarrera.save();
  res.json(dbResponse);
};
