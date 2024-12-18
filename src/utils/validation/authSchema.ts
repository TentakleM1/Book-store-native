import {emailYup, passwordYup} from './rule';
import * as yup from 'yup';

export const loginInSchema = yup.object({
  email: emailYup,
  password: passwordYup,
});

export const signUpSchema = yup.object({
  email: emailYup,
  password: passwordYup,
  passwordReplay: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required(),
});
