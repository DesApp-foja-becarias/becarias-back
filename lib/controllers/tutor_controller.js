import Tutor from '../models/tutor';
import TutorCarrera from '../models/tutorCarrera';
import Carrera from '../models/carrera';
import Materia from '../models/materia';
import TutorMateria from '../models/tutorMateria';

//GET general
export const index = async (req, res) => {
  const tutores = await Tutor.findAll({});
  res.json({ data: tutores.map((tutor) => tutor.toJSON()) });
};

// GET por id
export const show = async (req, res) => {
  const tutorId = req.params.id;
  const tutor = await Tutor.findByPk(tutorId, {
    include: [
      {
        as: 'CarrerasDeTutor',
        model: TutorCarrera,
        include: [{ as: 'Carrera', model: Carrera }],
      },
      {
        as: 'MateriasDeTutor',
        model: TutorMateria,
        include: [{ as: 'Materium', model: Materia }],
      },
    ],
  });
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

export const addTutorYCarrera = async (req, res) => {
  const {
    name,
    lastname,
    dni,
    telephone,
    address,
    email,
    actualState,
    carreer,
  } = req.body;

  try {
    const tutor = await Tutor.create({
      name,
      lastname,
      dni,
      telephone,
      address,
      email,
      actualState,
      carreer,
    });

    if (carreer.length > 0) {
      for (let i = 0; i < carreer.length; i++) {
        await TutorCarrera.create({
          TutorId: tutor.id,
          CarreraId: carreer[i],
        });
        res.status(201).json({
          tutor,
        });
      }
    } else {
      res.status(400).json({
        message: 'Debe seleccionar una carrera',
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//PUT
export const updateTutor = async (req, res) => {
  const tutor = await Tutor.findByPk(req.params.id);
  if (tutor) {
    tutor
      .update(
        {
          name: req.body.name,
          lastname: req.body.lastname,
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
