import React from 'react';
import {
  CustomButton,
  CustomButtonPropsType,
} from '../CustomButton/CustomButton';
import {styles} from './IconButton.styles';

export type IconButtonPropsType = CustomButtonPropsType;

export const IconButton: React.FC<IconButtonPropsType> = props => {
  return (
    <CustomButton
      {...props}
      isBackground={props.isBackground}
      styles={{...styles.buttonFulltRadius, ...props.styles}}
      onPress={props.onPress}
    />
  );
};
