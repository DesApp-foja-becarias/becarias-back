import axios from '../axios';

export const getCuatrimestres = async () => {
  return await axios
    .get('/cuatrimestre')
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      return null;
    });
};
