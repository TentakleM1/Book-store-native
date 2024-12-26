import React from 'react';
import {NativeSyntheticEvent, TextInputKeyPressEventData, View} from 'react-native';
import {Input} from '../../../../components/Input/Input';
import images from 'src/assets/imgs/images';
import {styles} from './CatalogHeader.style';

type CatalogHeaderPropsType = {
  value: string;
  onChangeText: (text: string) => void;
  onKeyPress: (e: NativeSyntheticEvent<TextInputKeyPressEventData>) => void;
}

export const CatalogHeader: React.FC<CatalogHeaderPropsType> = (props) => {
  return (
    <View style={styles.header}>
      <Input img={images.search} {...props} />
    </View>
  );
};
