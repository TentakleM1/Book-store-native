import {
  getUserApi,
  uploadAvatarApi,
  updatePasswordApi,
  updateProfileApi,
} from 'src/api/userApi/userApi';
import {IUpdatePassword, IUpdateProfile} from 'src/screens/ProfileScreen/types';
import { convertToBase64Async } from 'src/utils/convertToBase64Async/convertToBase64Async';

export class UserService {
  static async getUser() {
    const data = await getUserApi();
    return data.user;
  }

  static async updateProfile(user: IUpdateProfile) {
    const data = await updateProfileApi(user);
    return data.user;
  }

  static async uploadAvatar(formData: FormData) {
    const file = formData.get('file');
    if (typeof file === 'string' || !file) return;
    const base64 = await convertToBase64Async(file);
    if (typeof base64 !== 'string') {
      throw new Error('coded not true');
    }
    const data = await uploadAvatarApi(base64.split(',')[1]);
    return data.payload.user;
  }

  static async updatePassword(passwords: IUpdatePassword) {
    delete passwords.passwordReplay;
    await updatePasswordApi(passwords);
  }
}
