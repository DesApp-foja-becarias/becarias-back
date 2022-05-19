import axios from '../axios/axios.js';

export const getCarreras = () => {
  return axios.get('/carreras');
};
