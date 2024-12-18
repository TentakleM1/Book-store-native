export interface IUpdateProfile {
  fullName: string;
  email: string;
}

export interface IUpdatePassword {
  password: string;
  passwordNew: string;
  passwordReplay?: string;
}
