import RelacionBecariaActividad from '../models/becariaActividad';
import Becaria from '../models/becaria';

export const addBecariaActividad = async (req, res) => {
  const becariaactividadData = req.body;
  const becariaActividad = RelacionBecariaActividad.build(becariaactividadData);
  const dbResponse = await becariaActividad.save();
  res.json(dbResponse);
};

export const addBecariasAActividad = async (req, res) => {
  const actividad = req.body.ActividadId;
  const listBecariasData = req.body.Becarias;
  let result = '';
  for (let i = 0; i < listBecariasData.length; i++) {
    let relacion = JSON.parse(
      JSON.stringify({ BecariaId: listBecariasData[i], ActividadId: actividad })
    );
    let becariaactividad = RelacionBecariaActividad.build(relacion);
    const dbResponse = await becariaactividad.save();
    result = [...result, dbResponse];
  }
  res.json(result);
};

export const getBecariasEnActividad = async (req, res) => {
  const becariasActividadRelations = await RelacionBecariaActividad.findAll({
    where: { ActividadId: req.params.id },
  }).catch(() =>
    res.json({ message: `No se encontró una becaria con id ${req.params.id}` })
  );
  const becariasMapeadas = await Promise.all(
    becariasActividadRelations.map(async (becariaActividadRelation) => {
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

export const getActividadesDeBecarias = async (req, res) => {
  const actividades = await RelacionBecariaActividad.findAll({
    where: { ActividadId: req.params.id },
  }).catch(() =>
    res.json({
      message: `No se encontró una actividad con id ${req.params.id}`,
    })
  );
  res.json({ data: actividades.map((actividad) => actividad.toJSON()) });
};

export const updateBecariaActividad = async (req, res) => {
  const becariaactividad = await RelacionBecariaActividad.findByPk(
    req.params.id
  );
  if (becariaactividad) {
    becariaactividad
      .update(
        {
          BecariaId: req.body.BecariaId,
          ActividadId: req.body.ActividadId,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      )
      .then(() =>
        res.json({
          message: `Becaria y/o actividad actualizada`,
        })
      )
      .catch(() =>
        res.json({
          message: `Error al actualizar la becaria y/o actividad`,
        })
      );
  } else {
    res.status(404).json({
      message: `No se encontró una becaria y/o actividad con id ${req.params.id}`,
    });
  }
};

export const deleteDeterminadasBecariasDeUnaActividad = async (req, res) => {
  const actividad = req.body.Actividad;
  const listBecariasData = req.body.Becarias;
  let result = '';
  for (let i = 0; i < listBecariasData.length; i++) {
    await RelacionBecariaActividad.destroy({
      where: {
        BecariaId: listBecariasData[i],
        ActividadId: actividad,
      },
    })
      .then(() => {
        result = [...result, 'ok'];
      })
      .catch(() => {
        result = [...result, 'error'];
      }); //end forEach
    res.json(result);
  }
};

export const deleteRelacionYActividad = async (req, res) => {
  const actividad = await RelacionBecariaActividad.findByPk(req.params.id);
  if (actividad) {
    actividad
      .destroy({
        where: {
          id: req.params.id,
        },
      })
      .then(() =>
        res.json({
          message: `Actividad y/o becaria eliminada`,
        })
      )
      .catch(() =>
        res.json({
          message: `Error al eliminar la actividad y/o becaria`,
        })
      );
  } else {
    res.status(404).json({
      message: `No se encontró una actividad y/o becaria con id ${req.params.id}`,
    });
  }
};
