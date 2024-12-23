import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getBooksThunk} from './bookThunk';

export interface IAuthor {
  id: number;
  text: string;
}

export interface ICover {
  id: number;
  paperback_price: number;
  paperback_amount: number;
  hardcover_price: number;
  hardcover_amount: number;
}

export interface IBook {
  id: number;
  name: string;
  img: string;
  description: string;
  isBestseller: boolean;
  isNew: boolean;
  dateOfIssue: string;
  author: IAuthor;
  bookGenres: string[];
  cover: ICover;
  comments: string[];
  rates: string[];
  totalRate: number;
}

type BooksType = IBook[];

interface IInitialStateBook {
  books: BooksType;
}

const initialStateBook: IInitialStateBook = {
  books: [],
};

export const bookSlice = createSlice({
  name: 'book',
  initialState: initialStateBook,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      getBooksThunk.fulfilled,
      (state, action: PayloadAction<BooksType>) => {
        state.books = action.payload;
      },
    );
  },
});

export default bookSlice.reducer;
