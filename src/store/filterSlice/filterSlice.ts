import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getGenresThunk} from './filterThunk';

interface IGenre {
  id: number;
  name: string;
  isChecked?: boolean;
}

interface IInitialStateFilter {
  filters: IGenre[] | null;
}

const initialStateFilter: IInitialStateFilter = {
  filters: null,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialStateFilter,
  reducers: {
    changeFilter: (state, action: PayloadAction<IGenre[]>) => {
      state.filters = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(
      getGenresThunk.fulfilled,
      (state, action: PayloadAction<IGenre[]>) => {
        state.filters = action.payload;
      },
    );
  },
});

export const {changeFilter} = filterSlice.actions;

export default filterSlice.reducer;
