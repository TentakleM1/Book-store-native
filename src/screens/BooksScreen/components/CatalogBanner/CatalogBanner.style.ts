import {StyleSheet} from 'react-native';
import {colors} from 'src/styles/colors.styles';

export const styles = StyleSheet.create({
  banner: {
    height: 500,
    position: 'relative',
    paddingTop: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.light,
    borderRadius: 16,
  },

  bannerTitle: {
    display: 'flex',
    gap: 30,
  },

  transparentImg: {
    position: 'absolute',
    right: 0,
    top: 10,
    opacity: 0.3,
  },

  text: {
    color: colors.black,
  },
});
