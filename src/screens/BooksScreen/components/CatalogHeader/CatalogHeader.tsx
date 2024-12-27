import React from 'react';
import {
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
  View,
} from 'react-native';
import {Input} from '../../../../components/Input/Input';
import {styles} from './CatalogHeader.style';
import Search from 'src/assets/svg/search.svg';

type CatalogHeaderPropsType = {
  value: string;
  onChangeText: (text: string) => void;
  onKeyPress: (e: NativeSyntheticEvent<TextInputKeyPressEventData>) => void;
};

export const CatalogHeader: React.FC<CatalogHeaderPropsType> = props => {
  return (
    <View style={styles.header}>
      <Input img={<Search />} {...props} />
    </View>
  );
};
