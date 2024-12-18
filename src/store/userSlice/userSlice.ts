import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  getUserThunk,
  loginInThunk,
  signUpThunk,
  uploadAvatarThunk,
  updatePasswordThunk,
  updateProfileThunk,
} from './userThunk';

interface ITokens {
  token: string;
  refresh_token: string;
}

export interface IUser {
  id: number;
  avatar: string | null;
  fullName: string;
  email: string;
}

export interface IData {
  payload: {
    tokens?: ITokens;
    user?: IUser;
  };
}

interface IInitialStateUser {
  user: IUser | null;
}

const initialStateUser: IInitialStateUser = {
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialStateUser,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(signUpThunk.fulfilled, (state, action: PayloadAction<IUser>) => {
        state.user = action.payload;
      })
      .addCase(
        loginInThunk.fulfilled,
        (state, action: PayloadAction<IUser>) => {
          state.user = action.payload;
        },
      )
      .addCase(
        getUserThunk.fulfilled,
        (state, action: PayloadAction<IUser>) => {
          state.user = action.payload;
        },
      )
      .addCase(
        updateProfileThunk.fulfilled,
        (state, action: PayloadAction<IUser>) => {
          state.user = action.payload;
        },
      )
      .addCase(
        uploadAvatarThunk.fulfilled,
        (state, action: PayloadAction<IUser>) => {
          state.user = action.payload;
        },
      )
      .addCase(updatePasswordThunk.fulfilled, () => {
        console.log('good');
      });
  },
});

export default userSlice.reducer;
