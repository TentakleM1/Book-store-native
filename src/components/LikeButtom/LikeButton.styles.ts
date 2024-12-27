import {StyleSheet} from 'react-native';

export const getStyles = (isLike?: boolean) => {
  return StyleSheet.create({
    like: {
      opacity: isLike ? 1 : 0.7,
    },
  });
};

export default getStyles;
