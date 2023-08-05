import axios from 'axios';

const instance = axios.create({ baseURL: 'http://localhost:4200' });

instance.interceptors.request.use((config) => {
  const token = window.localStorage.getItem('token');
  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

export default instance;
