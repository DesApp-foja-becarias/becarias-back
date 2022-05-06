import RelacionBecariaTutor from '../models/becariaTutor';

//post
export const addTutorBecaria = async (req, res) => {
  const tutorBecariaData = req.body;
  const tutorBecaria = RelacionBecariaTutor.build(tutorBecariaData);
  const dbResponse = await tutorBecaria.save();
  res.json(dbResponse);
};

//get
export const getBecariaTutor = async (req, res) => {
  const becarias = await RelacionBecariaTutor.findAll({
    where: { BecariaId: req.params.id },
  }).catch(() =>
    res.json({
      message: `No se encontró una becaria con ese id ${req.params.id}`,
    })
  );
  res.json({ data: becarias.map((becaria) => becaria.toJSON()) });
};

//get
export const getTutorBecaria = async (req, res) => {
  const tutor = await RelacionBecariaTutor.findAll({
    where: { TutorId: req.params.id },
  }).catch(() =>
    res.json({
      message: `No se encontró un tutor con ese id ${req.params.id}`,
    })
  );
  res.json({ data: tutor.toJSON() });
};
