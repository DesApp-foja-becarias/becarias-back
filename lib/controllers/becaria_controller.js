import Becaria from '../models/becaria';
import BecariaMateria from '../models/becariaMateria';
import BecariaActividad from '../models/becariaActividad';
import Materia from '../models/materia';
import Actividad from '../models/actividad';
import Documentos from '../models/documento';
import BecariaCarrera from '../models/becariaCarrera';
import Carrera from '../models/carrera';
import BecariaTutor from '../models/becariaTutor';
import Tutor from '../models/tutor';
import Cuenta from '../models/cuenta';

export const index = async (req, res) => {
  const becarias = await Becaria.findAll({
    include: [
      {
        as: 'BecariasTutor',
        model: BecariaTutor,
        include: [{ as: 'Tutor', model: Tutor }],
      },
      {
        as: 'CarrerasDeBecaria',
        model: BecariaCarrera,
        include: [{ as: 'Carrera', model: Carrera }],
      },
      {
        as: 'ActividadesDeBecaria',
        model: BecariaActividad,
        include: [{ as: 'Actividad', model: Actividad }],
      },
    ],
  });
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
      { as: 'Documentos', model: Documentos },
      {
        as: 'CarrerasDeBecaria',
        model: BecariaCarrera,
        include: [{ as: 'Carrera', model: Carrera }],
      },
      {
        as: 'BecariasTutor',
        model: BecariaTutor,
        include: [{ as: 'Tutor', model: Tutor }],
      },
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

export const addBecaria = async (req, res) => {
  const {
    name,
    lastname,
    dni,
    birthday,
    telephone,
    address,
    city,
    email,
    cuit,
    actualState,
    weighing,
    announcement,
    careers,
    CuentaId,
  } = req.body;

  const cuenta = await Cuenta.create({
    bank: null,
    accountHolder: null,
    accountNumber: null,
    accountType: null,
    branchOffice: null,
    cbu: null,
  });
  try {
    const becaria = await Becaria.create({
      name,
      lastname,
      dni,
      birthday,
      telephone,
      address,
      city,
      email,
      cuit,
      actualState,
      weighing,
      announcement,
      careers,
      CuentaId: cuenta.id,
    });
    res.status(201).json({
      becaria,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
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
          dni: req.body.dni,
          birthday: req.body.birthday,
          telephone: req.body.telephone,
          address: req.body.address,
          city: req.body.city,
          email: req.body.email,
          cuit: req.body.cuit,
          actualState: req.body.actualState,
          weighing: req.body.weighing,
          announcement: req.body.announcement,
          CuentaId: req.body.cuentaId,
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
