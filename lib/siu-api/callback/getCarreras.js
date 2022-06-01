import axios from '../axios';

export const getCarreras = () => {
  return axios.get('/carreras');
};

export const getCarrerasDeDeptoDeIngenieria = () => {
  return axios.get('/departamentos/2/carreras');
};
