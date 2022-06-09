import axios from '../axios';
import { getCarrerasDeDeptoDeIngenieria } from './carrerasService';
import { getCuatrimestres } from './cuatrimestreService';

export const getStatusAcademico = async (becariaId) => {
  return await axios
    .get(`alumnos/${becariaId}/statusAcademico`)
    .then(async (response) => {
      const data = response.data;
      const materiasRegularesArray = data.materiasRegularizadas;
      const cuatrimestres = await getCuatrimestres();
      const materiasRegularesArrayMappeadas = Promise.all(
        await materiasRegularesArray.map(async (materiaRegularizada) => {
          console.log(
            await cuatrimestres.find(
              (cuatrimestre) =>
                cuatrimestre.periodoId == materiaRegularizada.periodo
            )
          );
          return {
            ...materiaRegularizada,
            periodo: await cuatrimestres.find(
              (cuatrimestre) =>
                cuatrimestre.periodoId == materiaRegularizada.periodo
            ),
          };
        })
      );

      return {
        carrera: data.carrera,
        materiasAprobadas: data.materiasAprobadas,
        materiasRegularizadas: await materiasRegularesArrayMappeadas,
      };
    })
    .catch(() => {
      return null;
    });
};
export const getBecariaIDDeLaCarrera = async (becariaDni, carreraId) => {
  return await axios
    .get(`alumnos/${becariaDni}/carrera/${carreraId}`)
    .then((response) => {
      return response.data.id;
    })
    .catch(() => {
      return null;
    });
};

export const getLastPeriod = async (becariaId) => {
  return await axios
    .get(`/alumnos/${becariaId}/inscripciones/historico`)
    .then(async (response) => {
      const { inscripciones } = response.data;

      const lastPeriod = inscripciones.reduce(
        (acc, curr) => {
          return curr.periodo > acc.periodo ? curr : acc;
        },
        { periodo: 0 }
      );

      const materiasFromLastPeriod = await Promise.all(
        lastPeriod.materias.map(async (materia) => {
          console.log(materia);
          const materiaData = await axios
            .get(`/materias/${materia}`)
            .then((response) => {
              return response.data;
            });
          return materiaData;
        })
      );

      return {
        ...lastPeriod,
        materias: materiasFromLastPeriod,
      };
    })
    .catch(() => {
      return null;
    });
};

export const getCarrerasDeBecaria = async (becariaDni) => {
  //retornara un array de carreras con las que esta becaria esta relacionada y sus materias
  const { carreras } = await getCarrerasDeDeptoDeIngenieria().then(
    (response) => {
      return response.data;
    }
  );
  // ACA ME TRAIGO LOS IDS DE LAS BECARIAS EN CADA CARRERA, SI NO ESTA DA NULL
  const BECARIA_IDS = await Promise.all(
    carreras.map(async (carrera) => {
      return await getBecariaIDDeLaCarrera(becariaDni, carrera.id);
    })
  );

  // ACA TENIENDO UN ARRAY DE IDS JUNTO CON NULLS QUE NO ME INTERESAN, FILTRO LOS ID NO NULOS
  const BECARIA_IDS_FILTERED = await BECARIA_IDS.filter((id) => {
    return id != null;
  });

  // TENIENDO ESOS IDS, TENGO ACCESSO AL STATUS ACADEMICO Y AL HISTORICO DE LA BECARIA

  // TRAOGP EL STATUS ACADEMICO DE LAS CARRERAS EN LAS QUE SE QUE SE ENCUENTRA
  const ACADEMIC_STATUS = await Promise.all(
    BECARIA_IDS_FILTERED.map(async (id) => {
      const academicStatus = await getStatusAcademico(id);
      const lastPeriod = await getLastPeriod(id);
      return {
        ...academicStatus,
        lastPeriod,
      };
    })
  );

  // ACA ME TRAIGO EL ULTIMO PERIODO DE LAS CARRERAS EN LAS QUE SE ENCUENTRA

  return ACADEMIC_STATUS;
};
