import {
  getBookApi,
  getBookFilterApi,
  getGenresApi,
} from 'src/api/bookApi/bookApi';
import {IQueryData} from 'src/store/bookSlice/bookThunk';

export class BookService {
  static async getBook(id: number) {
    const data = await getBookApi(id);
    return data.payload.book;
  }

  static async getBookFilter(query: IQueryData) {
    return await getBookFilterApi(query);
  }

  static async getGenres() {
    return await getGenresApi();
  }
}
