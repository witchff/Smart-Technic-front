import { IUser } from 'types/user';
import axios from '../axios';

type IProfile = {
  data?: IUser;
  message?: string;
};

type IUpdateProfile = {
  email?: string;
  phone?: string;
  city?: string;
  address?: string;
  index?: string;
  firstname?: string;
  surname?: string;
  payment?: string;
  avatar?: string;
};

export const getProfile = async (): Promise<IProfile> => {
  try {
    const { data } = await axios.get('/api/user/profile');

    return data;
  } catch (error) {
    return { message: 'Ошибка запроса профиля' };
  }
};

export const updateProfile = async (form: IUpdateProfile): Promise<any> => {
  try {
    const { data } = await axios.patch('/api/user/profile', form);

    return data;
  } catch (error) {
    return { message: 'Ошибка при обновлении профиля' };
  }
};
