import axios from 'axios';
import {SERVER_URL, SERVER_HOME} from 'src/config/api.config';
import {TokenService} from 'src/service/TokenService/TokenService';
import userApi from './userApi';

let refreshTokenProcess: {
  access_token: string;
  refresh_token: string;
} | null = null;

export const axiosDefault = axios.create({
  baseURL: SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosDefault.interceptors.request.use(
  async req => {
    await refreshTokenProcess;
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
        try {
          refreshTokenProcess = await userApi.refreshToken();

          if (refreshTokenProcess !== null && refreshTokenProcess) {
            TokenService.setTokens(refreshTokenProcess);
            return axiosDefault(originalRequest);
          }
        } catch (error) {
          TokenService.clearTokens();
          return Promise.reject(err);
        }
      }
    }
  },
);
