import {StyleSheet} from 'react-native';
import {widthDimensions} from 'src/styles/global.style';

export const styles = StyleSheet.create({
  booking: {
    height: '100%',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
  },

  bookingContainer: {
    width: widthDimensions,
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },

  bookingTotalBuy: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: -20,
    },
    shadowOpacity: 1,
    shadowRadius: 23,
    elevation: -8,
    display: 'flex',
    gap: 20,
  },
});
