import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  book: {
    width: 165,
    display: 'flex',
    justifyContent: 'space-between',
    gap: 10,
  },

  bookContent: {
    gap: 5,
  },

  bookImg: {
    height: 240,
    backgroundColor: '#F0F4EF',
    borderRadius: 24,
    overflow: 'hidden',
    position: 'relative',
  },

  favoriteButton: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  infoButton: {
    width: '60%',
    position: 'absolute',
    bottom: 10,
    left: 10,
    display: 'flex',
    rowGap: 5,
  },
});
