import axios from 'axios';
import {SERVER_URL} from 'src/config/api.config';
import {TokenService} from 'src/service/TokenService/TokenService';
import {refreshTokenApi} from './userApi';

let refreshTokenProcess = null;

export const axiosDefault = axios.create({
  baseURL: SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosDefault.interceptors.request.use(
  async req => {
    await refreshTokenProcess;
    req.headers.authorization = `Bearer ${TokenService.getAccessToken()}`;
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
        refreshTokenProcess = await refreshTokenApi();

        if (!refreshTokenProcess) {
          return Promise.reject(err);
        }
        TokenService.setTokens(
          refreshTokenProcess.access_token,
          refreshTokenProcess.refresh_token,
        );
        return axiosDefault(originalRequest);
      }
    }
    return Promise.reject(err);
  },
);
