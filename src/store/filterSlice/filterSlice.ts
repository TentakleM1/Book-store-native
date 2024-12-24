import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getGenresThunk} from './filterThunk';

interface IGenre {
  id: number;
  name: string;
}

interface IInitialStateFilter {
  filters: IGenre[];
}

const initialStateFilter: IInitialStateFilter = {
  filters: [{id: 0, name: ''}],
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialStateFilter,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      getGenresThunk.fulfilled,
      (state, action: PayloadAction<IGenre[]>) => {
        state.filters = action.payload;
      },
    );
  },
});

export default filterSlice.reducer;
