import React from 'react';
import {View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { colors } from 'src/styles/colors.styles';

type FilterGenrePropsType = {
  id: number;
  name: string;
  isChecked?: boolean;
  onPress: (checked: boolean, id: number) => void;
}

export const FilterGenre: React.FC<FilterGenrePropsType> = props => {
  return (
    <View>
      <BouncyCheckbox
        isChecked={props.isChecked}
        size={35}
        fillColor={colors.darkBlue}
        unFillColor="#FFFFFF"
        text={props.name}
        textStyle={{
          textDecorationLine: 'none',
          fontSize: 24,
          color: colors.darkBlue,
        }}
        iconStyle={{borderColor: colors.darkBlue}}
        innerIconStyle={{borderWidth: 2}}
        onPress={(isChecked: boolean) => {
          props.onPress(isChecked, props.id);
        }}
      />
    </View>
  );
};
