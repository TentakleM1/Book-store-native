import React from 'react';
import {Text} from 'react-native';
import getStyles from './Label.style';

type LablePropsType = {
  title: string;
  errors?: string;
};

export const Label: React.FC<LablePropsType> = props => (
  <Text style={getStyles(props.errors ? true : false).lable}>
    {props.errors ? props.errors : <>Enter your {props.title}</>}
  </Text>
);
