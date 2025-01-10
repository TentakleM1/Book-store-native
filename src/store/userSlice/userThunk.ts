import {createAsyncThunk} from '@reduxjs/toolkit';
import {IUpdatePassword, IUpdateProfile} from 'src/screens/ProfileScreen/types';
import {AuthService} from 'src/service/AuthService/AuthService';
import {UserService} from 'src/service/UserService/UserService';
import {ISignIn, ISignUp} from 'src/types/types';
import {IUser} from './userSlice';

export const signUpThunk = createAsyncThunk<IUser, ISignUp>(
  'user/signUp',
  async (user, thunkAPI) => {
    try {
      return await AuthService.signUp(user);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  },
);

export const signInThunk = createAsyncThunk<IUser, ISignIn>(
  'user/signIn',
  async (user, thunkAPI) => {
    try {
      return await AuthService.signIn(user);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  },
);

export const getMeThunk = createAsyncThunk(
  'user/getMe',
  async (_, thunkAPI) => {
    try {
      return await UserService.getMe();
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  },
);

export const updateProfileThunk = createAsyncThunk<IUser, IUpdateProfile>(
  'user/updateProfile',
  async (user, thunkAPI) => {
    try {
      return await UserService.updateProfile(user);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  },
);

export const uploadAvatarThunk = createAsyncThunk<{filename: string}, string>(
  'user/uploadAvatar',
  async (base64Data, thunkAPI) => {
    try {
      return await UserService.files(base64Data);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  },
);

export const updatePasswordThunk = createAsyncThunk(
  'user/updatePassword',
  async (password: IUpdatePassword, thunkAPI) => {
    try {
      await UserService.updatePassword(password);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  },
);
