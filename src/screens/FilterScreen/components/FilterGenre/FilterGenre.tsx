import React from 'react';
import {View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {colors} from 'src/styles/colors.styles';
import globalStyles from 'src/styles/global.styles';
import {styles} from './FilterGenre';

type FilterGenrePropsType = {
  id: number;
  name: string;
  isChecked?: boolean;
  onPress: (checked: boolean, id: number) => void;
};

export const FilterGenre: React.FC<FilterGenrePropsType> = props => {
  return (
    <View>
      {/* <BouncyCheckbox
        isChecked={props.isChecked}
        size={35}
        fillColor={colors.darkBlue}
        unFillColor={colors.white}
        text={props.name}
        textStyle={[globalStyles.textBlack, styles.text]}
        iconStyle={{borderColor: colors.darkBlue}}
        innerIconStyle={styles.icon}
        onPress={(isChecked: boolean) => {
          props.onPress(isChecked, props.id);
        }}
      /> */}
    </View>
  );
};
