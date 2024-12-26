import React, {useState} from 'react';
import {TextInputProps} from 'react-native';
import {Input} from '../Input/Input';
import images from 'src/assets/imgs/images';

export type PasswordInputPropsType = TextInputProps;

export const PasswordInput: React.FC<PasswordInputPropsType> = props => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(true);

  const handleChangeHide = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <Input
      {...props}
      img={isPasswordVisible ? images.hide : images.view}
      secureTextEntry={isPasswordVisible}
      onRightIconPress={handleChangeHide}
    />
  );
};
