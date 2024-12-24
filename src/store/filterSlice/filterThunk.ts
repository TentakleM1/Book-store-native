import {createAsyncThunk} from '@reduxjs/toolkit';
import {BookService} from 'src/service/BookService/BookService';

export const getGenresThunk = createAsyncThunk('filter/getGenres', async () => {
  try {
    return await BookService.getGenres();
  } catch (error) {
    console.log(error);
  }
});
