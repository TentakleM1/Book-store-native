import userApi from 'src/api/userApi';
import {IUpdatePassword, IUpdateProfile} from 'src/screens/ProfileScreen/types';

export class UserService {
  static async getMe() {
    const data = await userApi.getMe();
    return data.user;
  }

  static async updateProfile(user: IUpdateProfile) {
    const data = await userApi.updateProfile(user);
    return data;
  }

  static async files(base64Data: string) {
    return await userApi.files(base64Data);
  }

  static async updatePassword(passwords: IUpdatePassword) {
    delete passwords.passwordReplay;
    await userApi.updatePassword(passwords);
  }
}
