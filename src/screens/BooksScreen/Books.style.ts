import {StyleSheet} from 'react-native';
import { colors } from 'src/styles/colors.styles';

const styles = StyleSheet.create({
  books: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.white,
  },
  booksContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: 20,
  },
});

export default styles;
