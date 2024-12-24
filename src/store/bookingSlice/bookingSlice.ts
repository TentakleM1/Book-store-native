import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IBook} from '../bookSlice/bookSlice';
import {addBookInCartThunk, getCartThunk} from './bookingThunk';

interface ICartItems {
  id: number;
  total_price: number;
  quantity: number;
  book: IBook;
}

interface IBooking {
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
          state.booking.cartItems = action.payload.cartItems;
          state.booking.id = action.payload.id;
          state.booking.total_price = action.payload.total_price;
        },
      )
      .addCase(
        addBookInCartThunk.fulfilled,
        (state, action: PayloadAction<IBooking>) => {
          state.booking.cartItems = action.payload.cartItems;
          state.booking.id = action.payload.id;
          state.booking.total_price = action.payload.total_price;
        },
      );
  },
});

export default bookingSlice.reducer;
