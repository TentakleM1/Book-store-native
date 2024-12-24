import {createAsyncThunk} from '@reduxjs/toolkit';
import {BookService} from 'src/service/BookService/BookService';

export interface IQueryData {
  page: number;
  search: string;
  sortBy?: string;
  maxPrice?: number;
}

export const getBookFilterThunk = createAsyncThunk(
  'book/getBooks',
  async (query: IQueryData) => {
    try {
      return await BookService.getBookFilter(query);
    } catch (error) {
      console.log(error);
    }
  },
);
