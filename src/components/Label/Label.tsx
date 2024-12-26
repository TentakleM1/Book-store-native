import React from 'react';
import {Text} from 'react-native';
import {styles} from './Label.style';

type LablePropsType = {
  title: string;
  errors?: string;
};

export const Label: React.FC<LablePropsType> = props =>
  props.errors ? (
    <Text style={{...styles.lable, ...styles.errors}}>{props.errors}</Text>
  ) : (
    <Text style={styles.lable}>Enter your {props.title}</Text>
  );
