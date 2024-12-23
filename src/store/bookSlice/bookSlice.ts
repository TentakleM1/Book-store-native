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
  book: IBook;
  books: BooksType;
}

const initialStateBook: IInitialStateBook = {
  book: {
    id: 0,
    name: 'string',
    img: 'string',
    description: 'string',
    isBestseller: false,
    isNew: false,
    dateOfIssue: 'string',
    author: {
      id: 0,
      text: 'string',
    },
    bookGenres: [],
    cover: {
      id: 0,
      paperback_price: 0,
      paperback_amount: 0,
      hardcover_price: 0,
      hardcover_amount: 0,
    },
    comments: [],
    rates: [],
    totalRate: 1,
  },
  books: [],
};

export const bookSlice = createSlice({
  name: 'book',
  initialState: initialStateBook,
  reducers: {
    addBook: (state, action: PayloadAction<IBook>) => {
      state.book = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(
      getBooksThunk.fulfilled,
      (state, action: PayloadAction<BooksType>) => {
        state.books = action.payload;
      },
    );
  },
});

export const {addBook} = bookSlice.actions;

export default bookSlice.reducer;
