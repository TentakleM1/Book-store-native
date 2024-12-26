import {StyleSheet} from 'react-native';
import { colors } from 'src/styles/colors.styles';
import {widthDimensions} from 'src/styles/global.styles';

export const styles = StyleSheet.create({
  booking: {
    height: '100%',
    backgroundColor: colors.white,
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
    shadowColor: colors.black,
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
