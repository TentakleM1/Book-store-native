import {StyleSheet} from 'react-native';
import {widthDimensions} from 'src/styles/global.styles';

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
    justifyContent: 'space-between',
    columnGap: 20,
    marginBottom: 40,
  },
});
