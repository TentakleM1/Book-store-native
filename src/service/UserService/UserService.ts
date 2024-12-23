import {
  getUserApi,
  uploadAvatarApi,
  updatePasswordApi,
  updateProfileApi,
} from 'src/api/userApi/userApi';
import {IUpdatePassword, IUpdateProfile} from 'src/screens/ProfileScreen/types';

export class UserService {
  static async getUser() {
    const data = await getUserApi();
    return data.user;
  }

  static async updateProfile(user: IUpdateProfile) {
    const data = await updateProfileApi(user);
    return data.user;
  }

  static async uploadAvatar(base64Data: string) {
    return await uploadAvatarApi(base64Data);
  }

  static async updatePassword(passwords: IUpdatePassword) {
    delete passwords.passwordReplay;
    await updatePasswordApi(passwords);
  }
}
