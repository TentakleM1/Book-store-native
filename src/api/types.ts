import { BooksType, IMeta } from 'src/store/bookSlice/bookSlice';
import {IUser} from 'src/store/userSlice/userSlice';

export interface ITokensResponseData {
  access_token: string;
  refresh_token: string;
}

export interface IUserResponseData extends ITokensResponseData {
  user: IUser;
}

export interface IFilesResponseData {
  status: number;
  message: string;
  data: {filename: string};
}

export interface IBookResponseData {
  meta: IMeta;
  data: BooksType;
}
