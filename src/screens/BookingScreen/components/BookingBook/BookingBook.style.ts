import {StyleSheet} from 'react-native';
import {widthDimensions} from 'src/styles/global.style';

export const styles = StyleSheet.create({
  book: {
    width: widthDimensions,
    height: 310,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#D6D8E7',
    borderBottomWidth: 2,
    marginBottom: 30,
  },

  bookImg: {
    width: 170,
    height: 280,
  },

  bookContent: {
    width: 170,
    display: 'flex',
    justifyContent: 'space-around',
  },

  bookSetting: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
