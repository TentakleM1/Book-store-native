import React from 'react';
import getStyles from './FocusButton.styles';
import { IconButton, IconButtonPropsType } from 'src/components/IconButton/IconButton';

type FocusButtonPropsType = {
  isFocus: boolean;
} & IconButtonPropsType;

export const FocusButton: React.FC<FocusButtonPropsType> = props => {
  return (
    <IconButton
      {...props}
      style={[getStyles(props.isFocus).focus, props.styles]}
    />
  );
};