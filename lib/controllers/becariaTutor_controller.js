import Becaria from '../models/becaria';
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

export const getTutorBecaria = async (req, res) => {
  const becariasTutorRelations = await RelacionBecariaTutor.findAll({
    where: { TutorId: req.params.id },
  }).catch(() => res.json({ message: `No tiene Becarias a cargo` }));
  const becariasMapeadas = await Promise.all(
    becariasTutorRelations.map(async (becariaActividadRelation) => {
      const relation = becariaActividadRelation.toJSON();
      return await Becaria.findOne({
        where: { id: relation.BecariaId },
      }).catch(() =>
        res.json({
          message: `No se encontró una becaria con id ${req.params.id}`,
        })
      );
    })
  );
  res.json({ data: becariasMapeadas });
};

//put
export const updateTutorBecaria = async (req, res) => {
  const tutorBecaria = await RelacionBecariaTutor.findByPk(req.params.id);
  if (tutorBecaria) {
    tutorBecaria
      .update(
        {
          BecariaId: req.body.BecariaId,
          TutorId: req.body.TutorId,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      )
      .then(() =>
        res.json({
          message: 'Tutor y Becaria actualizado.',
        })
      )
      .catch(() =>
        res.json({
          message: 'Error al actualizar el Tutor y la Becaria',
        })
      );
  } else {
    res.status(404).json({
      message: `No se encontró al Tutor y a la Becaria con ese id ${req.params.id}`,
    });
  }
};
//Delete
export const deleteTutorBecaria = async (req, res) => {
  const tutorBecaria = await RelacionBecariaTutor.findByPk(req.params.id);
  if (tutorBecaria) {
    tutorBecaria
      .destroy()
      .then(() =>
        res.json({
          message: 'Tutor eliminado',
        })
      )
      .catch(() =>
        res.json({
          message: 'Error al intentar eliminar al tutor',
        })
      );
  } else {
    res
      .status(404)
      .json({ message: `No se encontró al tutor con ese id ${req.params.id}` });
  }
};
