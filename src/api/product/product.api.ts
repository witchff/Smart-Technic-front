import axios from '../axios';

export const getProducts = async (query = '') => {
  const { data } = await axios.get('/api/product' + query);

  return data;
};
