import {StyleSheet} from 'react-native';
import { heightDimensions, widthDimensions } from 'src/styles/global.style';

export const styles = StyleSheet.create({
  empty: {
    height: heightDimensions,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  emptyContainer: {
    height: 450,
    width: widthDimensions,
    display: 'flex',
    justifyContent: 'space-between',
  },

  emptyContent: {
    gap: 30,
  },

  emptyImg: {
    width: '100%',
    height: 210,
  },
});
