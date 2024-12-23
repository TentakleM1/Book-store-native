import {createAsyncThunk} from '@reduxjs/toolkit';
import { IUpdatePassword, IUpdateProfile } from 'src/screens/ProfileScreen/types';
import {AuthService} from 'src/service/AuthService/AuthService';
import {UserService} from 'src/service/UserService/UserService';
import {ILogin, ISignUp} from 'src/types/types';

export const signUpThunk = createAsyncThunk(
  'user/signUp',
  async (user: ISignUp) => {
    try {
      return await AuthService.signUp(user);
    } catch (error) {
      console.log(error);
    }
  },
);

export const loginInThunk = createAsyncThunk(
  'user/loginIn',
  async (user: ILogin) => {
    try {
      return await AuthService.loginIn(user);
    } catch (error) {
      console.log(error);
    }
  },
);

export const getUserThunk = createAsyncThunk('user/getUser', async () => {
  try {
    return await UserService.getUser();
  } catch (error) {
    console.log(error);
  }
});

export const updateProfileThunk = createAsyncThunk(
  'user/updateProfile',
  async (user: IUpdateProfile) => {
    try {
      return await UserService.updateProfile(user);
    } catch (error) {
      console.log(error);
    }
  },
);

export const uploadAvatarThunk = createAsyncThunk(
  'user/uploadAvatar',
  async (base64Data: string) => {
    try {
      return await UserService.uploadAvatar(base64Data);
    } catch (error) {
      console.log(error);
    }
  },
);

export const updatePasswordThunk = createAsyncThunk(
  'user/updatePassword',
  async (password: IUpdatePassword) => {
    try {
      await UserService.updatePassword(password);
    } catch (error) {
      console.log(error);
    }
  },
);
