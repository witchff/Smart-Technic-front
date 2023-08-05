import { ICategories } from 'types/category';
import axios from '../axios';

export type IGetCategories = {
  categories?: ICategories;
  message?: string;
};

export const getCategories = async (): Promise<IGetCategories> => {
  try {
    const { data } = await axios.get('/api/category');

    return data;
  } catch (error) {
    return { message: 'Ошибка при получении категорий' };
  }
};
