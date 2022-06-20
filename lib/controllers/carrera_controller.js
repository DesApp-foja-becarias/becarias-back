// import Carrera from '../models/carrera';
import {
  getCarrerasDeDeptoDeIngenieria,
  getMateriasDeCarrera,
} from '../siu-api/callback/carrerasService';

export const index = async (req, res) => {
  const { carreras } = await getCarrerasDeDeptoDeIngenieria()
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
      res.status(500).send(error);
    });
  const carrerasConSusMaterias = await Promise.all(
    carreras.map(async (carrera) => {
      const materias = await getMateriasDeCarrera(carrera.id)
        .then((response) => response.data)
        .catch((error) => {
          console.log(error);
          res.status(500).send(error);
        });
      return {
        ...carrera,
        materias,
      };
    })
  );

  res.status(200).send(carrerasConSusMaterias);
};

// export const show = async (req, res) => {
//   const carrera = await Carrera.findByPk(req.params.id);
//   if (carrera) {
//     res.json({ data: carrera.toJSON() });
//   } else {
//     res
//       .status(404)
//       .json({ message: `No se encontró una carrera con id ${req.params.id}` });
//   }
// };

// export const add = async (req, res) => {
//   const carreraData = req.body;
//   const carrera = Carrera.build(carreraData);
//   const dbResponse = await carrera.save();
//   res.json(dbResponse);
// };

// //PUT
// export const updateCarrera = async (req, res) => {
//   const carrera = await Carrera.findByPk(req.params.id);
//   if (carrera) {
//     carrera
//       .update(
//         {
//           name: req.body.name,
//           TutorId: req.body.TutorId,
//         },
//         {
//           where: {
//             id: req.body.id,
//           },
//         }
//       )
//       .then(() =>
//         res.json({
//           message: 'Carrera actualizada.',
//         })
//       )
//       .catch(() =>
//         res.json({
//           message: 'Error al actualizar la Carrera',
//         })
//       );
//   } else {
//     res.status(404).json({
//       message: `No se encontró la carrera con el id ${req.params.id}`,
//     });
//   }
// };

// //DELETE
// export const deleteCarrera = async (req, res) => {
//   const carrera = await Carrera.findByPk(req.params.id);
//   if (carrera) {
//     carrera
//       .destroy()
//       .then(() =>
//         res.json({
//           message: 'Carrera eliminada',
//         })
//       )
//       .catch(() =>
//         res.json({
//           message: 'Error al intentar eliminar la Carrera',
//         })
//       );
//   } else {
//     res.status(404).json({
//       message: `No se encontró la carrera con el id ${req.params.id}`,
//     });
//   }
// };
