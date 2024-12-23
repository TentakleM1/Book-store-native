import {getBookApi, getBooksApi} from 'src/api/bookApi/bookApi';

export class BookService {
  static async getBook(id: number) {
    const data = await getBookApi(id);
    return data.payload.book;
  }

  static async getBooks() {
    const payload = await getBooksApi();
    return payload.data;
  }
}
