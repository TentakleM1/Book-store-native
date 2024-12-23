import {axiosDefault} from '../axiosDefault';

export const getGenresApi = async () => {
  const res = await axiosDefault.get('/genres');
  return res.data;
};
