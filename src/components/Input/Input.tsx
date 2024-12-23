import React from 'react';
import {
  Image,
  Pressable,
  PressableProps,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import styles from './Input.styles';

export interface IInputProps extends TextInputProps {
  img: number;
  pressableProps?: PressableProps;
}

export const Input: React.FC<IInputProps> = props => {
  return (
    <View style={styles.input__container}>
      <Pressable {...props.pressableProps}>
        <Image source={props.img} />
      </Pressable>
      <TextInput
        {...props}
        style={styles.input}
        placeholderTextColor={'#B9BAC3'}
      />
    </View>
  );
};
