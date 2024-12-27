import React, {useState} from 'react';
import {TextInputProps} from 'react-native';
import {Input} from '../Input/Input';
import View from 'src/assets/svg/view.svg';
import Hide from 'src/assets/svg/hide.svg';

export type PasswordInputPropsType = TextInputProps;

export const PasswordInput: React.FC<PasswordInputPropsType> = props => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(true);

  const handleChangeHide = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <Input
      {...props}
      img={isPasswordVisible ? Hide : View}
      secureTextEntry={isPasswordVisible}
      onRightIconPress={handleChangeHide}
    />
  );
};
