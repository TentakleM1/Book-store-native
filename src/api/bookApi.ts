import {IQueryData} from 'src/store/bookSlice/bookThunk';
import {axiosDefault} from './axiosDefault';
import {IBook} from 'src/store/bookSlice/bookSlice';
import {IGenre} from 'src/store/filterSlice/filterSlice';
import { IBookResponseData } from './types';

const getBook = async (id: number) => {
  const res = await axiosDefault.get<IBook>(`/books/${id}`);
  return res.data;
};

const filteredBooks = async (
  query: IQueryData,
) => {
  const res = await axiosDefault.get<IBookResponseData>('/books', {params: query});
  return res.data;
};

const getGenres = async () => {
  const res = await axiosDefault.get<IGenre[]>('/genres');
  return res.data;
};

export default {getBook, filteredBooks, getGenres};
