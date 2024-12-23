import {StyleSheet} from 'react-native';
import { widthDimensions } from 'src/styles/global.style';

export const styles = StyleSheet.create({
  catalog: {
    width: widthDimensions,
  },

  catalogTitle: {
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  catalogBooks: {
    flex: 1,
  },
});
