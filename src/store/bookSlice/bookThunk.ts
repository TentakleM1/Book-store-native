import {createAsyncThunk} from '@reduxjs/toolkit';
import {BookService} from 'src/service/BookService/BookService';
import { IQuery } from '../filterSlice/filterSlice';
import { IBookResponseData } from 'src/api/types';

export interface IQueryData extends IQuery {
  page: number
}

export const getBookFilterThunk = createAsyncThunk<IBookResponseData,IQueryData>(
  'book/getBooks',
  async (query, thunkAPI) => {
    try {
      return await BookService.filteredBooks(query);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  },
);
