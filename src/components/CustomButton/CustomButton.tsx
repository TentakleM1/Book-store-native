import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface ICustomButtonProps {
  title: string;
  handlePress: () => void
}

export const CustomButton = (props: ICustomButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.handlePress}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 150,
    backgroundColor: '#344966',
    padding: 10,
    borderRadius: 16,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 16,
    fontWeight: '500',
  },
});
