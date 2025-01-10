import bookingApi from 'src/api/bookingApi';

export class BookingService {
  static async getCart() {
    const data = await bookingApi.getCart();
    return data;
  }
  static async addBookInCart(bookId: number) {
    const data = await bookingApi.addBookInCart(bookId);
    return data;
  }
}
