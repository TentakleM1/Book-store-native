import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getGenresThunk} from './filterThunk';

export interface IGenre {
  id: number;
  name: string;
}

export interface IQuery {
  search: string | null;
  sortBy: string | null;
  maxPrice: number | null;
  genres: string | null;
}

interface IInitialStateFilter {
  genres: IGenre[] | null;
  query: IQuery;
}

const initialStateFilter: IInitialStateFilter = {
  genres: null,
  query: {
    search: null,
    sortBy: null,
    maxPrice: null,
    genres: null,
  },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialStateFilter,
  reducers: {
    changeFilter: (state, action: PayloadAction<IGenre[]>) => {
      state.genres = action.payload;
    },
    changeQuery: (state, action: PayloadAction<IQuery>) => {
      state.query = {...state.query, ...action.payload};
    },
  },
  extraReducers: builder => {
    builder.addCase(
      getGenresThunk.fulfilled,
      (state, action: PayloadAction<IGenre[]>) => {
        state.genres = action.payload;
      },
    );
  },
});

export const {changeFilter, changeQuery} = filterSlice.actions;

export default filterSlice.reducer;
