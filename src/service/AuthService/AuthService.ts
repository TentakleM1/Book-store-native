import {authorization, registration} from 'src/api/authApi';
import {ILogin, ISignUp} from 'src/types/types';
import {TokenService} from '../TokenService/TokenService';

export class AuthService {
  static async loginIn(user: ILogin) {
    const data = await authorization(user);
    TokenService.setTokens(data.access_token, data.refresh_token);
    return data.user;
  }

  static async signUp(user: ISignUp) {
    delete user.passwordReplay;
    const data = await registration(user);
    await TokenService.setTokens(data.access_token, data.refresh_token);
    return data.payload.user;
  }

  static logout() {
    TokenService.clearTokens();
  }
}
