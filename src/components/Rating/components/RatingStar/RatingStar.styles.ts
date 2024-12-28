import {StyleSheet} from 'react-native';

export const getStyles = (size: number) => {
  return StyleSheet.create({
    star: {
      width: size,
    },
  });
};

export default getStyles;
