import {StyleSheet} from 'react-native';
import {colors} from 'src/styles/colors.styles';

const getStyles = (isError: boolean) => {
  return StyleSheet.create({
    lable: {
      color: isError ? '#C30052' : colors.darkBlue,
      fontSize: 18,
      fontWeight: '500',
    },
  });
};

export default getStyles;
