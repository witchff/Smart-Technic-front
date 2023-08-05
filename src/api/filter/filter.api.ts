import axios from '../axios';

export const getFilters = async (url: string) => {
  try {
    const { data } = await axios.get(`/api/filters${url}`);

    return data;
  } catch (error) {
    console.log(error, 'Ошибка при получении фильтров');
  }
};
