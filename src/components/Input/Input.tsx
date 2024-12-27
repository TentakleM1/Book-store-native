import React, { ReactNode } from 'react';
import {Pressable, TextInput, TextInputProps, View} from 'react-native';
import styles from './Input.styles';
import { colors } from 'src/styles/colors.styles';
import { SvgProps } from 'react-native-svg';

export type InputPropsType = {
  img: ReactNode | React.FC<SvgProps>;
  onRightIconPress?: () => void;
} & TextInputProps;

export const Input: React.FC<InputPropsType> = props => {
  return (
    <View style={styles.input__container}>
      {!props.onRightIconPress && (typeof props.img === 'function' ? props.img({}) : props.img)}
      <TextInput
        {...props}
        style={styles.input}
        placeholderTextColor={colors.darkGrey}
      />
      {props.onRightIconPress && (
        <Pressable onPress={props.onRightIconPress}>{typeof props.img === 'function' ? props.img({}) : props.img}</Pressable>
      )}
    </View>
  );
};
