import { getBookApi, getBooksApi } from "@/shared/api/bookApi/bookApi";

export class BookService {
  static async getBook(id: number) {
    const data = await getBookApi(id);
    return data.payload.book;
  }

  static async getBooks() {
    const data = await getBooksApi();
    return data.payload.books;
  }
}
