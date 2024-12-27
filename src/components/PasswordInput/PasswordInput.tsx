import React, {useState} from 'react';
import {TextInputProps} from 'react-native';
import {Input} from '../Input/Input';
import Camera from 'src/assets/svg/camera.svg';

export type PasswordInputPropsType = TextInputProps;

export const PasswordInput: React.FC<PasswordInputPropsType> = props => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(true);

  const handleChangeHide = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <Input
      {...props}
      img={<Camera />}
      secureTextEntry={isPasswordVisible}
      onRightIconPress={handleChangeHide}
    />
  );
};
