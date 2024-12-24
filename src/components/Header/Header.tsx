import React from 'react';
import {NativeSyntheticEvent, TextInputKeyPressEventData, View} from 'react-native';
import {Input} from '../Input/Input';
import images from 'src/assets/imgs/images';
import {styles} from './Header.style';

interface IHeaderProps {
  value: string;
  onChangeText: (text: string) => void;
  onKeyPress: (e: NativeSyntheticEvent<TextInputKeyPressEventData>) => void;
}

export const Header: React.FC<IHeaderProps> = (props) => {
  return (
    <View style={styles.header}>
      <Input img={images.search} {...props} />
    </View>
  );
};
