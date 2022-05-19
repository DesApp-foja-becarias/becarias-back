import axios from '../axios';

export const getCarreras = () => {
  return axios.get('/carreras');
};
