import {axiosDefault} from './axiosDefault';

export const getCartApi = async () => {
  const res = await axiosDefault.get('/user/cart');
  return res.data;
};

export const addBookInCartApi = async (bookId: number) => {
  const res = await axiosDefault.post(`/user/cart/${bookId}`);
  return res.data;
};
