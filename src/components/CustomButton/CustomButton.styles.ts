import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  button: {
    height: 45,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonDefaultRadius: {
    borderRadius: 16,
  },

  buttonFulltRadius: {
    borderRadius: 100,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default styles;
