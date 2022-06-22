import { getCarrerasDeDeptoDeIngenieria } from './carrerasService';

export const getCarrerasMapeadasDeTutor = async (carrerasTutor) => {
  //retornara un array de carreras con las que esta becaria esta relacionada y sus materias
  const { carreras } = await getCarrerasDeDeptoDeIngenieria().then(
    (response) => {
      return response.data;
    }
  );
  const carrerasMapeadas = carrerasTutor.map((carreraId) => {
    //carrera es de del get, carrerasTutor son los IDS
    const carreraEncontrada = carreras.find(
      (carrera) => carrera.id === carreraId
    );
    return {
      carrera: {
        id: carreraEncontrada.id,
        carrera: carreraEncontrada.nombre,
      },
    };
  });
  return carrerasMapeadas;
};
