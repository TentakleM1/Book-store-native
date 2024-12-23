import {createAsyncThunk} from '@reduxjs/toolkit';
import { BookingService } from 'src/service/BookingService/BookingService';

export const getCartThunk = createAsyncThunk('booking/getCart', async () => {
  try {
    return await BookingService.getCart();
  } catch (error) {
    console.log(error);
  }
});
