import axios from 'api/axios';
import { Auth, FormAuth } from 'types/auth';

export const registerAuth = async (user: FormAuth): Promise<Auth> => {
  try {
    const { data } = await axios.post('/api/auth/register', user);

    if (data) {
      window.localStorage.setItem('token', data.accessToken);
    }

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const loginAuth = async (user: FormAuth): Promise<Auth> => {
  try {
    const { data } = await axios.post('/api/auth/login', user);

    if (data) {
      window.localStorage.setItem('token', data.accessToken);
    }

    return data;
  } catch (error) {
    console.log(error);
  }
};
