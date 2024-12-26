import {StyleSheet} from 'react-native';
import { colors } from 'src/styles/colors.styles';

export const styles = StyleSheet.create({
  avatar: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.white,
  },

  buttonCantainer: {
    width: 200,
    display: 'flex',
    alignItems: 'center',
    gap: 20,
  },
});
