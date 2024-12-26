import {StyleSheet} from 'react-native';
import { colors } from 'src/styles/colors.styles';
import {widthDimensions} from 'src/styles/global.styles';

export const styles = StyleSheet.create({
  filter: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.light,

  },

  filterContainer: {
    width: widthDimensions,
  },

  button: {
    padding: 10,
  },
});
