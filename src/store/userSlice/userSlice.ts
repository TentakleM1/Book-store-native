import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  getMeThunk,
  signInThunk,
  signUpThunk,
  uploadAvatarThunk,
  updatePasswordThunk,
  updateProfileThunk,
} from './userThunk';
import {AuthService} from 'src/service/AuthService/AuthService';

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
    books?: string;
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
  reducers: {
    logout: state => {
      AuthService.logout();
      state.user = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(signUpThunk.fulfilled, (state, action: PayloadAction<IUser>) => {
        state.user = action.payload;
      })
      .addCase(signInThunk.fulfilled, (state, action: PayloadAction<IUser>) => {
        state.user = action.payload;
      })
      .addCase(getMeThunk.fulfilled, (state, action: PayloadAction<IUser>) => {
        state.user = action.payload;
      })
      .addCase(
        updateProfileThunk.fulfilled,
        (state, action: PayloadAction<IUser>) => {
          state.user = action.payload;
        },
      )
      .addCase(
        uploadAvatarThunk.fulfilled,
        (state, action: PayloadAction<{filename: string}>) => {
          if (state.user) {
            state.user = {...state.user, avatar: action.payload.filename};
          }
        },
      )
      .addCase(updatePasswordThunk.fulfilled, () => {
        console.log('Password changed');
      });
  },
});
export const {logout} = userSlice.actions;

export default userSlice.reducer;
