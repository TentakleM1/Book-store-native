import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getBookFilterThunk} from './bookThunk';

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

export interface IRates {
  id: number;
  value: number;
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
  rates: IRates[];
  totalRate: number;
}

export interface IMeta {
  page: number;
  take: number;
  itemCount: number;
  pageCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

type BooksType = IBook[];

interface IInitialStateBook {
  book: IBook;
  books: BooksType;
  meta: IMeta;
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
  meta: {
    page: 1,
    take: 12,
    itemCount: 14,
    pageCount: 2,
    hasPreviousPage: false,
    hasNextPage: true,
  },
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
      getBookFilterThunk.fulfilled,
      (state, action: PayloadAction<{meta: IMeta; data: BooksType}>) => {
        state.meta = action.payload.meta;
        state.books =
          action.payload.meta.page === 1
            ? action.payload.data
            : [...state.books, ...action.payload.data];
      },
    );
  },
});

export const {addBook} = bookSlice.actions;

export default bookSlice.reducer;
