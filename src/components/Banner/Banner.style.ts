import {StyleSheet} from 'react-native';
import { widthDimensions } from 'src/styles/global.style';

export const styles = StyleSheet.create({
  banner: {
    height: 500,
    width: widthDimensions,
    position: 'relative',
    paddingTop: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgb(229, 231, 228)',
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
});
