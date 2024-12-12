import {createAsyncThunk} from '@reduxjs/toolkit';

export interface ILoginIn {
  email: string;
  password: string;
}

export interface ISignUp {
  email: string;
  password: string;
  passwordReplay?: string;
}

export const signUpThunk = createAsyncThunk(
  'user/signUp',
  async (user: ISignUp) => {
    try {
      return {
        id: 1,
        avatar: null,
        fullName: 'string',
        email: 'string',
      };
    } catch (error) {
      console.log(error);
    }
  },
);

export const loginInThunk = createAsyncThunk(
  'user/signIn',
  async (user: ILoginIn) => {
    try {
      return {
        id: 1,
        avatar: null,
        fullName: 'string',
        email: 'string',
      };
    } catch (error) {
        console.log(error);
    }
  },
);
