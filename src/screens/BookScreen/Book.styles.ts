import {StyleSheet} from 'react-native';
import {widthDimensions} from 'src/styles/global.style';

export const styles = StyleSheet.create({
  book: {
    display: 'flex',
    alignItems: 'center',
  },

  bookContainer: {
    width: widthDimensions,
    display: 'flex',
    rowGap: 20,
  },

  bookImg: {
    height: 550,
    borderRadius: 24,
    overflow: 'hidden',
    position: 'relative',
  },

  bookButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  bookButton: {
    width: 170,
  },
});
