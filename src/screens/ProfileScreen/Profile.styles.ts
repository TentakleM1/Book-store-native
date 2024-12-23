import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  profile: {
    height: '100%',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
  },

  avatar: {
    width: '100%',
    height: 350,
    backgroundColor: '#F0F4EF',
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
    color: '#8D9F4F',
    textDecorationLine: 'underline',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default styles;
