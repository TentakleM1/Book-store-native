import {StyleSheet} from 'react-native';
import { colors } from 'src/styles/colors.styles';
import { widthDimensions } from 'src/styles/global.styles';

export const styles = StyleSheet.create({
  catalogTitle: {
    width: widthDimensions,
    borderBottomColor: colors.darkBlue,
    borderBottomWidth: 2,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
