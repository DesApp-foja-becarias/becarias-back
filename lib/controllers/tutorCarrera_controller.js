import TutorCarrera from '../models/tutorCarrera';
import RelacionTutorCarrera from '../models/tutorCarrera';

export const addTutorCarrera = async (req, res) => {
  const tutorCarreraData = req.body;
  const tutorCarrera = RelacionTutorCarrera.build(tutorCarreraData);
  const dbResponse = await tutorCarrera.save();
  res.json(dbResponse);
};

export const updateTutorCarreras = async (req, res) => {
  const { id } = req.params;
  const carrerasIDs = req.body;
  const tutorCarreraRelationsNoMap = await RelacionTutorCarrera.findAll({
    where: {
      TutorId: id,
    },
  });
  // map tutorCarreraRelations wich is a sequelize data to an array of ids
  const tutorCarreraRelations = tutorCarreraRelationsNoMap.map(
    (tutorCarreraRelation) => tutorCarreraRelation.toJSON()
  );

  // destroy if relation exists in tutorCarreraRelations but not in carrerasIDs

  await tutorCarreraRelations.forEach(async (tutorCarreraRelation) => {
    if (!carrerasIDs.includes(tutorCarreraRelation.CarreraId)) {
      await TutorCarrera.destroy({
        where: {
          TutorId: id,
          CarreraId: tutorCarreraRelation.CarreraId,
        },
      });
    }
  });

  // create if relation doesn't exist in tutorCarreraRelations but exists in carrerasIDs
  carrerasIDs.forEach(async (carreraID) => {
    TutorCarrera.findOne({
      where: {
        TutorId: id,
        CarreraId: carreraID,
      },
    }).then((tutorCarrera) => {
      if (!tutorCarrera) {
        TutorCarrera.create({
          TutorId: id,
          CarreraId: carreraID,
        });
      }
    });
  });
  res.json({
    message: 'Carreras actualizadas.',
  });
};
