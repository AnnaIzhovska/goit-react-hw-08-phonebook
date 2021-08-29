import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchRegister = (credentials) => {
  return axios.post('/user/singup', credentials);
};

export const fetchlogIn = (credentials) => {
  return axios.post('/user/login', credentials);
};

export const fetchlogOut = () => {
  return axios.post('/user/logout');
};

export const fetchCurrentAuth = () => {
  return axios.get('/user/current');
};