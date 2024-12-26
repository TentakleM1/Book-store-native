import React from 'react';
import {Image, Pressable, TextInput, TextInputProps, View} from 'react-native';
import styles from './Input.styles';

export type InputPropsType = {
  img: number;
  onRightIconPress?: () => void;
} & TextInputProps;

export const Input: React.FC<InputPropsType> = props => {
  return (
    <View style={styles.input__container}>
      {!props.onRightIconPress && <Image source={props.img} />}
      <TextInput
        {...props}
        style={styles.input}
        placeholderTextColor={'#B9BAC3'}
      />
      {props.onRightIconPress && (
        <Pressable onPress={props.onRightIconPress}>
          <Image source={props.img} />
        </Pressable>
      )}
    </View>
  );
};
