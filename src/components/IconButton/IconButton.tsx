import React from 'react';
import {CustomButton, CustomButtonPropsType} from '../CustomButton/CustomButton';
import {View} from 'react-native';
import {styles} from './IconButton.styles';

export type IconButtonPropsType = CustomButtonPropsType;

export const IconButton: React.FC<IconButtonPropsType> = props => {
  return (
    <View style={[styles.iconButton]}>
      <CustomButton
        {...props}
        isBackground={props.isBackground}
        styles={styles.buttonFulltRadius}
        onPress={props.onPress}
      />
    </View>
  );
};
