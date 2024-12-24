import {addBookInCartApi, getCartApi} from 'src/api/bookingApi/bookingApi';

export class BookingService {
  static async getCart() {
    const data = await getCartApi();
    return data;
  }
  static async addBookInCart(bookId: number) {
    const data = await addBookInCartApi(bookId);
    return data;
  }
}
