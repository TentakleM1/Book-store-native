import {Dimensions, StyleSheet} from 'react-native';
import { colors } from './colors.styles';

export const widthDimensions = Dimensions.get('window').width - 40;
export const heightDimensions = Dimensions.get('window').height;

const globalStyles = StyleSheet.create({
  displayFull: {width: '100%', height: '100%'},

  textBigBold: {
    color: colors.black,
    fontWeight: '700',
  },

  textBig: {
    color: '#344966',
    fontSize: 26,
    fontWeight: '500',
  },

  textBigBlack: {
    color: 'black',
    fontWeight: '500',
  },

  textMiddle: {
    color: '#344966',
    fontWeight: '500',
  },

  textMiddleLight: {
    color: '#B9BAC3',
    fontWeight: '500',
  },

  button: {
    width: '100%',
  },
});

export default globalStyles;
