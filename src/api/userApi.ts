import axios from 'axios';
import {axiosDefault} from './axiosDefault';
import {TokenService} from 'src/service/TokenService/TokenService';
import {SERVER_URL} from 'src/config/api.config';
import {IUpdatePassword, IUpdateProfile} from 'src/screens/ProfileScreen/types';

axiosDefault.interceptors.request.use(
  req => {
    const token = TokenService.getAccessToken();
    if (token) {
      req.headers.authorization = `Bearer ${token}`;
    }
    return req;
  },
  error => {
    return Promise.reject(error);
  },
);

axiosDefault.interceptors.response.use(
  res => res,
  async err => {
    const originalRequest = err.config;
    if (err.response) {
      if (err.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        const tokens = await refreshTokenApi();
        if (!tokens) {
          return Promise.reject(err);
        }
        TokenService.setTokens(tokens.access_token, tokens.refresh_token);
        axiosDefault.defaults.headers.common.authorization = `Bearer ${tokens.access_token}`;
        return axiosDefault(originalRequest);
      }
    }
    return Promise.reject(err);
  },
);

export const refreshTokenApi = async () => {
  try {
    const refresh_token = await TokenService.getRefreshToken();
    const res = await axios.get<
      any,
      {access_token: string; refresh_token: string}
    >(`${SERVER_URL}/auth/refresh`, {
      headers: {
        authorization: `Bearer ${refresh_token}`,
      },
    });
    return {
      access_token: res.access_token,
      refresh_token: res.refresh_token,
    };
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
