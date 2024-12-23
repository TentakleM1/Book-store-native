import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IBook} from '../bookSlice/bookSlice';
import {getCartThunk} from './bookingThunk';

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
  booking: IBooking | null;
}

const initialStateBooking: IInitialStateBooking = {
  booking: null,
};

export const bookingSlice = createSlice({
  name: 'booking',
  initialState: initialStateBooking,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      getCartThunk.fulfilled,
      (state, action: PayloadAction<IBooking>) => {
        state.booking = action.payload;
      },
    );
  },
});

export default bookingSlice.reducer;
