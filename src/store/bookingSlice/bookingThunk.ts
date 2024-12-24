import {createAsyncThunk} from '@reduxjs/toolkit';
import {BookingService} from 'src/service/BookingService/BookingService';

export const getCartThunk = createAsyncThunk('booking/getCart', async () => {
  try {
    return await BookingService.getCart();
  } catch (error) {
    console.log(error);
  }
});

export const addBookInCartThunk = createAsyncThunk(
  'booking/addBookInCart',
  async (bookId: number) => {
    try {
      return await BookingService.addBookInCart(bookId);
    } catch (error) {
      console.log(error);
    }
  },
);
