import bookApi from 'src/api/bookApi';
import { IQueryData } from 'src/store/bookSlice/bookThunk';

export class BookService {
  static async getBook(id: number) {
    return await bookApi.getBook(id);
  }

  static async filteredBooks(query: IQueryData) {
    return await bookApi.filteredBooks(query);
  }

  static async getGenres() {
    return await bookApi.getGenres();
  }
}
