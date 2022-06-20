import Tutor from '../models/tutor';
import TutorCarrera from '../models/tutorCarrera';
import BecariaTutor from '../models/becariaTutor';
import Becaria from '../models/becaria';
import { getCarrerasMapeadasDeTutor } from '../siu-api/callback/tutorService';

//GET general
export const index = async (req, res) => {
  const tutores = await Tutor.findAll({
    include: [
      {
        as: 'carrerasDeTutor',
        model: TutorCarrera,
      },
      {
        as: 'BecariasTutor',
        model: BecariaTutor,
        include: [{ as: 'Becarium', model: Becaria }],
      },
    ],
  });
  const tutoresMapeados = await Promise.all(
    tutores.map(async (tutor) => {
      let tutorMapped = tutor.toJSON();
      tutorMapped.carrerasDeTutor = tutorMapped.carrerasDeTutor.map(
        (carrera) => carrera.CarreraId
      );
      tutorMapped.academicStatus = await getCarrerasMapeadasDeTutor(
        tutorMapped.carrerasDeTutor
      );

      return tutorMapped;
    })
  );
  res.json({ data: tutoresMapeados });
};

// GET por id
export const show = async (req, res) => {
  const tutorId = req.params.id;
  const tutor = await Tutor.findByPk(tutorId, {
    include: [
      {
        as: 'carrerasDeTutor',
        model: TutorCarrera,
      },
      //{
      //as: 'BecariasDeTutor',
      //model: BecariaTutor,
      //include: [{ as: 'Becaria', model: Becaria }],
      //},
    ],
  });
  if (tutor) {
    let tutorMapped = tutor.toJSON();
    tutorMapped.carrerasDeTutor = tutorMapped.carrerasDeTutor.map(
      (carrera) => carrera.CarreraId
    );
    tutorMapped.academicStatus = await getCarrerasMapeadasDeTutor(
      tutorMapped.carrerasDeTutor
    );

    res.json({ data: tutorMapped });
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
  tutorData.carreers.map((carrera) => {
    let relacionTutorCarrera = TutorCarrera.build({
      TutorId: dbResponse.id,
      CarreraId: carrera.id,
    });
    relacionTutorCarrera.save();
  });
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
