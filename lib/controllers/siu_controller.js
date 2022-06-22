import { getCarreras } from '../siu-api/callback/carrerasService';

export const getCarrerasDesdeElSiu = async (req, res) => {
  const carreras = await getCarreras();
  res.json({ data: carreras.data });
};
