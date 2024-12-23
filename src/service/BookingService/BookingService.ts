import {getCartApi} from 'src/api/bookingApi/bookingApi';

export class BookingService {
  static async getCart() {
    const data = await getCartApi();
    return data;
  }
}
