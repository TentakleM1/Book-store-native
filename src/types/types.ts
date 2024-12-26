import {RouteProp} from '@react-navigation/native';

export interface ILogin {
  email: string;
  password: string;
}

export interface ISignUp {
  email: string;
  password: string;
  passwordReplay?: string;
}

export interface IRouteProp {
  route: RouteProp<
    {
      params: {
        page: number;
        search: string;
        sortBy?: string;
        maxPrice?: number;
        genres?: string;
      };
    },
    'params'
  >;
}
