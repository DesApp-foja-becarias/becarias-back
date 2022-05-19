const axios = require('axios');

const instance = axios.create({
  baseURL: 'http://35.202.132.160/proyectos-estudiantes',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
