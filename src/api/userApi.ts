import axios from 'axios';
import {axiosDefault} from './axiosDefault';
import {TokenService} from 'src/service/TokenService/TokenService';
import {SERVER_URL} from 'src/config/api.config';
import {IUpdatePassword, IUpdateProfile} from 'src/screens/ProfileScreen/types';
import { IFilesResponseData, ITokensResponseData, IUserResponseData } from './types';
import { IUser } from 'src/store/userSlice/userSlice';

const refreshToken = async () => {
  const refresh_token = TokenService.getRefreshToken();
  const res = await axios.post<ITokensResponseData>(`${SERVER_URL}/auth/refresh-token`, {
    refresh_token: refresh_token,
  });
  return res.data;
};

const getMe = async () => {
  const res = await axiosDefault.get<IUserResponseData>('/user/me');
  return res.data;
};

const updateProfile = async (user: IUpdateProfile) => {
  const res = await axiosDefault.patch<IUser>('/user/me', user);
  return res.data;
};

const updatePassword = async (passwords: IUpdatePassword) => {
  await axiosDefault.patch('/user/pass', passwords);
};

const files = async (base64Data: string) => {
  const res = await axiosDefault.post<IFilesResponseData>('/files', {
    base64Data: base64Data,
    fileType: 'avatar',
  });
  return res.data.data;
};

export default {
  refreshToken,
  getMe,
  updateProfile,
  updatePassword,
  files,
};
