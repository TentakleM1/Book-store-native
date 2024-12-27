import {StyleSheet} from 'react-native';
import { colors } from 'src/styles/colors.styles';

const styles = StyleSheet.create({
  input__container: {
    width: '100%',
    backgroundColor: colors.light,
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
  },
  input: {
    width: '80%',
    color: colors.black,
    fontSize: 21,
    fontWeight: '600',
  },
});

export default styles;
