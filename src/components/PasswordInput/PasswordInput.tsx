import React, {useState} from 'react';
import {TextInputProps} from 'react-native';
import {Input} from '../Input/Input';
import images from 'src/assets/imgs/images';

export interface IPasswordInputProps extends TextInputProps {}

export const PasswordInput: React.FC<IPasswordInputProps> = props => {
  const [isHide, setIsHide] = useState<boolean>(true);

  const handleChangeHide = () => {
    setIsHide(!isHide);
  };

  return (
    <Input
      {...props}
      img={isHide ? images.hide : images.view}
      secureTextEntry={isHide}
      pressableProps={{onPress: handleChangeHide}}
    />
  );
};
