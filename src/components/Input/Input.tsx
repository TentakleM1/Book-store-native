import React from 'react';
import {Image, TextInput, TextInputProps, View} from 'react-native';
import styles from './Input.styles';

interface IInputProps extends TextInputProps {
  img: number;
}

export const Input: React.FC<IInputProps> = (props) => {
  return (
    <View style={styles.input__container}>
      <Image source={props.img}/>
      <TextInput
        style={styles.input}
        placeholderTextColor={'#B9BAC3'}
        {...props}
      />
    </View>
  );
};
