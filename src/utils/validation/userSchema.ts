import {emailYup, passwordYup, textYup} from './rule';
import * as yup from 'yup';

export const profileUpdateSchema = yup.object({
  fullName: textYup,
  email: emailYup,
});

export const passwordUpdateSchema = yup.object({
  password: passwordYup,
  passwordNew: yup
    .string()
    .notOneOf(
      [yup.ref('oldPassword')],
      'New Password dosent repeat old password',
    )
    .required(),
    passwordReplay: yup
    .string()
    .oneOf([yup.ref('newPassword')], 'Passwords must match')
    .required(),
});
