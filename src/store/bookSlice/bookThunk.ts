import {createAsyncThunk} from '@reduxjs/toolkit';
import {BookService} from 'src/service/BookService/BookService';

export const getBooksThunk = createAsyncThunk('book/getBooks', async () => {
  try {
    return await BookService.getBooks();
  } catch (error) {
    console.log(error);
  }
});
