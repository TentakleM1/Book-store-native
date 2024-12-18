import SecureStorage from 'react-native-fast-secure-storage';

export class TokenService {
  static setAccessToken(access_token: string) {
    SecureStorage.setItemSync('access_token', access_token);
  }

  static setRefreshToken(refresh_token: string) {
    SecureStorage.setItemSync('refresh_token', refresh_token);
  }

  static setTokens(access_token: string, refresh_token: string) {
    this.setAccessToken(access_token);
    this.setRefreshToken(refresh_token);
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
}
