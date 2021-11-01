import Tutor from '../models/tutor';

export const index = async (req, res) => {
  const tutores = await Tutor.findAll({});
  res.json({ data: tutores.map((tutor) => tutor.toJSON()) });
};

export const show = async (req, res) => {
  const tutor = await Tutor.findByPk(req.params.id);
  if (tutor) {
    res.json({ data: tutor.toJSON() });
  } else {
    res
      .status(404)
      .json({ message: `No se encontró un tutor con id ${req.params.id}` });
  }
};

export const add = async (req, res) => {
  const tutorData = req.body;
  const tutor = Tutor.build(tutorData);
  const dbResponse = await tutor.save();
  res.json(dbResponse);
};
