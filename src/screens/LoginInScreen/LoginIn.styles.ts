import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  container: {
    height: 300,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    rowGap: 20,
  },

  baseText: {
    color: 'black',
    fontWeight: '800',
    fontSize: 28,
  },

  container__form: {
    backgroundColor: 'red',
  },

  logo: {
    width: 88,
    height: 46,
  },
});

export default styles;
