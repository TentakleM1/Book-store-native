import {createAsyncThunk} from '@reduxjs/toolkit';
import {BookService} from 'src/service/BookService/BookService';
import { IGenre } from './filterSlice';

export const getGenresThunk = createAsyncThunk<IGenre[]>('filter/getGenres', async (_, thunkAPI) => {
  try {
    return await BookService.getGenres();
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});
