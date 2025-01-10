import authApi from 'src/api/authApi';
import {ISignIn, ISignUp} from 'src/types/types';
import {TokenService} from '../TokenService/TokenService';

export class AuthService {
  static async signIn(user: ISignIn) {
    const data = await authApi.signIn(user);
    TokenService.setTokens({
      access_token: data.access_token,
      refresh_token: data.refresh_token,
    });
    return data.user;
  }

  static async signUp(user: ISignUp) {
    delete user.passwordReplay;
    const data = await authApi.signUp(user);
    TokenService.setTokens({
      access_token: data.access_token,
      refresh_token: data.refresh_token,
    });
    return data.user;
  }

  static logout() {
    TokenService.clearTokens();
  }
}
