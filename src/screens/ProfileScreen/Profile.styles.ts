import {StyleSheet} from 'react-native';
import { colors } from 'src/styles/colors.styles';

const styles = StyleSheet.create({
  profile: {
    height: '100%',
    backgroundColor: colors.white,
    display: 'flex',
    alignItems: 'center',
  },

  avatar: {
    width: '100%',
    height: 350,
    backgroundColor: colors.light,
    borderRadius: 24,
    overflow: 'hidden',
    position: 'relative',
  },

  avatarButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
  },

  information: {
    width: '100%',
    marginTop: 30,
    display: 'flex',
    gap: 15,
  },

  titleChange: {
    gap: 5,
  },

  textChange: {
    color: colors.darkGreen,
    textDecorationLine: 'underline',
    fontWeight: '700',
  },
});

export default styles;
