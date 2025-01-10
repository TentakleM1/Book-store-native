import {StyleSheet} from 'react-native';
import { colors } from 'src/styles/colors.styles';
import { widthDimensions } from 'src/styles/global.styles';

const styles = StyleSheet.create({
  books: {
    height: '100%',
    backgroundColor: colors.white,
    display: 'flex',
    alignItems: 'center',
    gap: 20,
  },
  booksContainer: {
    width: widthDimensions,
    marginBottom: 20,
  },

  catalogBooks: {
    justifyContent: 'space-between',
    columnGap: 20,
    marginBottom: 40,
  },
});

export default styles;
