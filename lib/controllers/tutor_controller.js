import Tutor from '../models/tutor';

//GET general
export const index = async (req, res) => {
  const tutores = await Tutor.findAll({});
  res.json({ data: tutores.map((tutor) => tutor.toJSON()) });
};

// GET por id
export const show = async (req, res) => {
  const tutorId = req.params.id;
  const tutor = await Tutor.findByPk(tutorId, { include: 'Becarias' });
  if (tutor) {
    res.json({ data: tutor.toJSON() });
  } else {
    res
      .status(404)
      .json({ message: `No se encontró un tutor con id ${req.params.id}` });
  }
};

//POST
export const add = async (req, res) => {
  const tutorData = req.body;
  const tutor = Tutor.build(tutorData);
  const dbResponse = await tutor.save();
  res.json(dbResponse);
};

//PUT
export const updateTutor = async (req, res) => {
  const tutor = await Tutor.findByPk(req.params.id);
  if (tutor) {
    tutor
      .update(
        {
          name: req.body.name,
          lastname: req.body.surname,
          dni: req.body.dni,
          email: req.body.email,
          telephone: req.body.telephone,
        },
        {
          where: {
            id: req.body.id,
          },
        }
      )
      .then(() =>
        res.json({
          message: 'Tutor actualizado.',
        })
      )
      .catch(() =>
        res.json({
          message: 'Error al actualizar el tutor',
        })
      );
  } else {
    res
      .status(404)
      .json({ message: `No se encontró un tutor con id ${req.params.id}` });
  }
};

//DELETE
export const deleteTutor = async (req, res) => {
  const tutor = await Tutor.findByPk(req.params.id);
  if (tutor) {
    tutor
      .destroy()
      .then(() =>
        res.json({
          message: 'Tutor eliminado',
        })
      )
      .catch(() =>
        res.json({
          message: 'Error al intentar eliminar el tutor',
        })
      );
  } else {
    res
      .status(404)
      .json({ message: `No se encontró un tutor con id ${req.params.id}` });
  }
};
