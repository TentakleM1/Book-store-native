import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  profile: {
    height: '100%',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
  },

  scroll: {
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
    right: 10,
    bottom: 10,
  },

  information: {
    width: '100%',
    marginTop: 30,
    display: 'flex',
    gap: 10,
  },

  text: {
    color: '#0D1821',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default styles;
