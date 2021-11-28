import Becaria from '../models/becaria';
import BecariaMateria from '../models/becariaMateria';
import BecariaActividad from '../models/becariaActividad';
import Materia from '../models/materia';
import Tutor from '../models/tutor';
import Actividad from '../models/actividad';
import Documentos from '../models/documento';

export const index = async (req, res) => {
  const becarias = await Becaria.findAll({});
  res.json({ data: becarias.map((becaria) => becaria.toJSON()) });
};

export const show = async (req, res) => {
  const becariaId = req.params.id;
  const becaria = await Becaria.findByPk(becariaId, {
    include: [
      {
        as: 'MateriasDeBecaria',
        model: BecariaMateria,
        include: [{ as: 'Materium', model: Materia }],
      },
      {
        as: 'ActividadesDeBecaria',
        model: BecariaActividad,
        include: [{ as: 'Actividad', model: Actividad }],
      },
      { as: 'Tutor', model: Tutor },
      { as: 'Documentos', model: Documentos },
    ],
  });
  if (becaria) {
    res.json({ data: becaria.toJSON() });
  } else {
    res
      .status(404)
      .json({ message: `No se encontró una becaria con id ${req.params.id}` });
  }
};

export const add = async (req, res) => {
  const becariaData = req.body;
  const becaria = Becaria.build(becariaData);
  const dbResponse = await becaria.save();
  res.json(dbResponse);
};

//PUT
export const updateBecaria = async (req, res) => {
  const becaria = await Becaria.findByPk(req.params.id);
  if (becaria) {
    becaria
      .update(
        {
          name: req.body.name,
          lastname: req.body.lastname,
          city: req.body.city,
          address: req.body.address,
          dni: req.body.dni,
          email: req.body.email,
          birthday: req.body.birthday,
          telephone: req.body.telephone,
          cuit: req.body.cuit,
          actualState: req.body.actualState,
          weighing: req.body.weighing,
          announcement: req.body.announcement,
          TutorId: req.body.TutorId,
          MateriaId: req.body.MateriaId,
          ActividadId: req.body.ActividadId,
        },
        {
          where: {
            id: req.body.id,
          },
        }
      )
      .then(() =>
        res.json({
          message: 'Becaria actualizada.',
        })
      )
      .catch(() =>
        res.json({
          message: 'Error al actualizar la becaria',
        })
      );
  } else {
    res
      .status(404)
      .json({ message: `No se encontró una becaria con id ${req.params.id}` });
  }
};

//DELETE
export const deleteBecaria = async (req, res) => {
  const becaria = await Becaria.findByPk(req.params.id);
  if (becaria) {
    becaria
      .destroy()
      .then(() =>
        res.json({
          message: 'Becaria eliminado',
        })
      )
      .catch(() =>
        res.json({
          message: 'Error al intentar eliminar el becaria',
        })
      );
  } else {
    res
      .status(404)
      .json({ message: `No se encontró una becaria con id ${req.params.id}` });
  }
};
