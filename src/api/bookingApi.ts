import { IBooking } from 'src/store/bookingSlice/bookingSlice';
import {axiosDefault} from './axiosDefault';

const getCart = async () => {
  const res = await axiosDefault.get<IBooking>('/user/cart');
  return res.data;
};

const addBookInCart = async (bookId: number) => {
  await axiosDefault.post(`/user/cart/${bookId}`);
};

export default {getCart, addBookInCart};
