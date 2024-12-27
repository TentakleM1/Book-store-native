import React from 'react';
import {Pressable, TextInput, TextInputProps, View} from 'react-native';
import styles from './Input.styles';
import { colors } from 'src/styles/colors.styles';

export type InputPropsType = {
  img: React.ReactNode;
  onRightIconPress?: () => void;
} & TextInputProps;

export const Input: React.FC<InputPropsType> = props => {
  return (
    <View style={styles.input__container}>
      {!props.onRightIconPress && props.img}
      <TextInput
        {...props}
        style={styles.input}
        placeholderTextColor={colors.light}
      />
      {props.onRightIconPress && (
        <Pressable onPress={props.onRightIconPress}>{props.img}</Pressable>
      )}
    </View>
  );
};
