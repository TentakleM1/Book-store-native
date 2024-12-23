import {axiosDefault} from '../axiosDefault';

export const getCartApi = async () => {
  const res = await axiosDefault.get('/user/cart');
  return res.data;
};
