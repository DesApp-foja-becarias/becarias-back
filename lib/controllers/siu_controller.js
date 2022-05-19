import { getCarreras } from '../siu-api/callback/getCarreras';

export const getCarrerasDesdeElSiu = async (req, res) => {
  const carreras = await getCarreras();
  res.json({ data: carreras.data });
};
