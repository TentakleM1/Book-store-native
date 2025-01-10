import {createAsyncThunk} from '@reduxjs/toolkit';
import {BookingService} from 'src/service/BookingService/BookingService';
import {IBooking} from './bookingSlice';

export const getCartThunk = createAsyncThunk<IBooking>(
  'booking/getCart',
  async (_, thunkAPI) => {
    try {
      return await BookingService.getCart();
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  },
);

export const addBookInCartThunk = createAsyncThunk(
  'booking/addBookInCart',
  async (bookId: number, thunkAPI) => {
    try {
      await BookingService.addBookInCart(bookId);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  },
);
