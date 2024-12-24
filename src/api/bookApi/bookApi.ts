import {IQueryData} from 'src/store/bookSlice/bookThunk';
import {axiosDefault} from '../axiosDefault';

export const getBookApi = async (id: number) => {
  const res = await axiosDefault.get(`/books/${id}`);
  return res.data;
};

export const getBookFilterApi = async (query: IQueryData) => {
  console.log(query)
  const res = await axiosDefault.get('/books', {params: query});
  console.log(res.data)
  return res.data;
};

export async function getGenresApi() {
  const res = await axiosDefault.get('/genres');
  return res.data;
}
