import React from 'react';
import {View} from 'react-native';
import {Input} from '../Input/Input';
import images from 'src/assets/imgs/images';
import { styles } from './header.style';

export const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <Input img={images.search} />
    </View>
  );
};
