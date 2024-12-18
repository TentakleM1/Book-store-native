import { ILogin, ISignUp } from 'src/types/types';
import {axiosDefault} from '../axiosDefault';

export const registration = async (user: ISignUp) => {
  const res = await axiosDefault.post('/auth/sign-up', user);
  return res.data;
};

export const authorization = async (user: ILogin) => {
  const res = await axiosDefault.post('/auth/sign-in', user);
  return res.data;
};
