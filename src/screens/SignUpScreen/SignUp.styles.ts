import {StyleSheet} from 'react-native';
import { colors } from 'src/styles/colors.styles';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  container: {
    height: 300,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    rowGap: 20,
  },

  form: {
    alignItems: 'center',
    rowGap: 10,
  },

  baseText: {
    color: colors.black,
    fontWeight: '800',
    fontSize: 28,
  },

  container__form: {
    backgroundColor: 'red',
  },

  logo: {
    width: 88,
    height: 46,
  },

  signButton: {
    width: 200,
    gap: 20,
  },
});

export default styles;
