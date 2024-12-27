import {Dimensions, StyleSheet} from 'react-native';
import {colors} from './colors.styles';

export const widthDimensions = Dimensions.get('window').width - 40;
export const heightDimensions = Dimensions.get('window').height;

const globalStyles = StyleSheet.create({
  displayFull: {width: '100%', height: '100%'},

  textBigBold: {
    color: colors.black,
    fontWeight: '700',
  },

  textBlack: {
    color: colors.black,
    fontWeight: '500',
  },

  textBlue: {
    color: colors.darkBlue,
    fontWeight: '500',
  },

  textLight: {
    color: colors.lightGrey,
    fontWeight: '500',
  },

  button: {
    width: '100%',
  },
});

export default globalStyles;
