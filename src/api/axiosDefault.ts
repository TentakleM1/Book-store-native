import axios from 'axios';
import { SERVER_URL } from 'src/config/api.config';

export const axiosDefault = axios.create({
  baseURL: SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
