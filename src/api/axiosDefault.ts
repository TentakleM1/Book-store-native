import axios from 'axios';
import {SERVER_URL} from 'src/config/api.config';
import {TokenService} from 'src/service/TokenService/TokenService';
import { refreshTokenApi } from './userApi';

export const axiosDefault = axios.create({
  baseURL: SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

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
