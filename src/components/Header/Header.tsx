import React from 'react';
import {View} from 'react-native';
import {Input} from '../Input/Input';
import images from 'src/assets/imgs/images';

export const Header: React.FC = () => {
  return (
    <View>
      <Input img={images.search} />
    </View>
  );
};
