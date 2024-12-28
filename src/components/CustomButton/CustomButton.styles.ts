import {StyleSheet} from 'react-native';
import {colors} from 'src/styles/colors.styles';

export const getStyles = (isBackground?: boolean) => {
  return StyleSheet.create({
    button: {
      height: 45,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      columnGap: 20,
      backgroundColor: isBackground ? 'none' : colors.darkBlue,
      borderRadius: 16,
    },

    buttonText: {
      fontSize: 16,
      fontWeight: '500',
    },
  });
};

export default getStyles;
