import {ISignIn, ISignUp} from 'src/types/types';
import {axiosDefault} from './axiosDefault';
import { IUserResponseData } from './types';

const signUp = async (user: ISignUp) => {
  const res = await axiosDefault.post<IUserResponseData>('/auth/sign-up', user);
  return res.data;
};

const signIn = async (user: ISignIn) => {
  const res = await axiosDefault.post<IUserResponseData>('/auth/sign-in', user);
  return res.data;
};

export default {signIn, signUp};
