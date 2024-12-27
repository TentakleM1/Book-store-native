import SecureStorage from 'react-native-fast-secure-storage';
import {axiosDefault} from 'src/api/axiosDefault';

export class TokenService {
  static setAccessToken(access_token: string) {
    this.observer(access_token);
    SecureStorage.setItemSync('access_token', access_token);
  }

  static setRefreshToken(refresh_token: string) {
    SecureStorage.setItemSync('refresh_token', refresh_token);
  }

  static setTokens(tokens: {access_token: string; refresh_token: string}) {
    this.setAccessToken(tokens.access_token);
    this.setRefreshToken(tokens.refresh_token);
  }

  static getAccessToken() {
    return SecureStorage.getItemSync('access_token');
  }

  static getRefreshToken() {
    return SecureStorage.getItemSync('refresh_token');
  }

  static clearTokens() {
    SecureStorage.clearStorage();
  }

  static observer(access_token: string) {
    axiosDefault.defaults.headers.common.Authorization = `Bearer ${access_token}`;
  }
}
