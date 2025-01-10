import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IBook} from '../bookSlice/bookSlice';
import {addBookInCartThunk, getCartThunk} from './bookingThunk';

interface ICartItems {
  id: number;
  total_price: number;
  quantity: number;
  book: IBook;
}

export interface IBooking {
  id: number;
  total_price: number;
  cartItems: ICartItems[];
}

interface IInitialStateBooking {
  booking: IBooking;
}

const initialStateBooking: IInitialStateBooking = {
  booking: {
    id: 0,
    total_price: 0,
    cartItems: [],
  },
};

export const bookingSlice = createSlice({
  name: 'booking',
  initialState: initialStateBooking,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        getCartThunk.fulfilled,
        (state, action: PayloadAction<IBooking>) => {
          state.booking = action.payload;
        },
      )
      .addCase(
        addBookInCartThunk.fulfilled,
        () => {
          console.log('added book in cart');
        },
      );
  },
});

export default bookingSlice.reducer;
