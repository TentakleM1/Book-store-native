import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  banner: {
    height: 500,
    width: 350,
    paddingTop: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgb(229, 231, 228)',
    borderRadius: 16,
  },

  bannerTitle: {
    display: 'flex',
    gap: 10,
  },

  textTitle: {
    color: 'black',
    fontSize: 18,
    fontWeight: '700',
  },

  text: {
    color: 'black',
    fontSize: 14,
    fontWeight: '500',
  },
});
