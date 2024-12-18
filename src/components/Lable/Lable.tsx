import React from 'react';
import {Text} from 'react-native';
import {styles} from './Lable.style';

interface ILableProps {
  title: string;
  errors?: string;
}

export const Lable: React.FC<ILableProps> = props =>
  props.errors ? (
    <Text style={{...styles.lable, ...styles.errors}}>{props.errors}</Text>
  ) : (
    <Text style={styles.lable}>Enter your {props.title}</Text>
  );
