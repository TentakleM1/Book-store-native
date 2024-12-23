import {Dimensions, StyleSheet} from 'react-native';

export const widthDimensions = Dimensions.get('window').width - 40;
export const heightDimensions = Dimensions.get('window').height;

const globalStyles = StyleSheet.create({
  textBigBold: {
    color: 'black',
    fontSize: 26,
    fontWeight: '700',
  },

  textBig: {
    color: '#344966',
    fontSize: 26,
    fontWeight: '500',
  },

  textBigBlack: {
    color: 'black',
    fontSize: 26,
    fontWeight: '500',
  },

  textMiddle: {
    color: '#344966',
    fontSize: 18,
    fontWeight: '500',
  },

  textMiddleLight: {
    color: '#B9BAC3',
    fontSize: 18,
    fontWeight: '500',
  },

  button: {
    width: '100%',
  },
});

export default globalStyles;
