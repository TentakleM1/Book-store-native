import React from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';
import images from '../../assets/imgs/images';

interface IInputProps {
  img: string;
  placeholder: string;
  isSecure: boolean
}

export const Input: React.FC<IInputProps> = (props) => {
  return (
    <View style={styles.input__container}>
      <Image source={images[props.img]}/>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        placeholderTextColor={'#B9BAC3'}
        secureTextEntry={props.isSecure}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input__container: {
    width: 300,
    backgroundColor: '#F0F4EF',
    borderRadius: 16,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
  },
  input: {
    width: 240,
    color: 'black',
    fontSize: 21,
    fontWeight: '600',
  },
});
