import axios from 'axios';
import {axiosDefault} from './axiosDefault';
import {TokenService} from 'src/service/TokenService/TokenService';
import {SERVER_URL} from 'src/config/api.config';
import {IUpdatePassword, IUpdateProfile} from 'src/screens/ProfileScreen/types';

export const refreshTokenApi = async () => {
  try {
    const refresh_token = TokenService.getRefreshToken();
    const res = await axios.post(`${SERVER_URL}/auth/refresh-token`, {
      refresh_token: refresh_token,
    });
    return res.data;
  } catch (error) {
    TokenService.clearTokens();
  }
};

export const getUserApi = async () => {
  const res = await axiosDefault.get('/user/me');
  return res.data;
};

export const updateProfileApi = async (user: IUpdateProfile) => {
  const res = await axiosDefault.patch('/user/me', user);
  return res.data;
};

export const updatePasswordApi = async (passwords: IUpdatePassword) => {
  const res = await axiosDefault.patch('/user/pass', passwords);
  return res.data;
};

export const uploadAvatarApi = async (base64Data: string) => {
  const res = await axiosDefault.post('/files', {
    base64Data: base64Data,
    fileType: 'avatar',
  });
  return res.data.data;
};
