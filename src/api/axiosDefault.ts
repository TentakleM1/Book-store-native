import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {SERVER_URL} from 'src/config/api.config';
import {TokenService} from 'src/service/TokenService/TokenService';
import {refreshTokenApi} from './userApi';

let refresh = null;

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

let isRefreshToken = false;
let requestQueue: Array<{
  resolve: (value: AxiosResponse | PromiseLike<AxiosResponse>) => void;
  reject: (err?: any) => void;
  config: AxiosRequestConfig;
}> = [];


const processQueue = (error: any) => {
  requestQueue.forEach(action => {
    if (error) {
      action.reject(error);
    } else {
      action.resolve(axiosDefault(action.config));
    }
  });

  requestQueue = [];
};

axiosDefault.interceptors.response.use(
  res => res,
  async err => {
    const originalRequest = err.config;
    if (err.response) {
      if (err.response.status === 401 && !originalRequest._retry) {
        if (isRefreshToken) {
          return new Promise((resolve, reject) => {
            requestQueue.push({resolve, reject, config: originalRequest});
          });
        }
        isRefreshToken = true;
        originalRequest._retry = true;
        const tokens = await refreshTokenApi();
        if (!tokens) {
          return Promise.reject(err);
        }
        TokenService.setTokens(tokens.access_token, tokens.refresh_token);
        axiosDefault.defaults.headers.common.authorization = `Bearer ${tokens.access_token}`;
        processQueue(null);
        isRefreshToken = false;
        return axiosDefault(originalRequest);
      }
    }
    return Promise.reject(err);
  },
);
