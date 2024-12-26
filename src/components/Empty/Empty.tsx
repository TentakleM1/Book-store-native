import React from 'react';
import {Image, Text, View} from 'react-native';
import images from 'src/assets/imgs/images';
import {CustomButton} from 'src/components/CustomButton/CustomButton';
import globalStyles from 'src/styles/global.styles';
import {styles} from './Empty.styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type EmptyPropsType = {
  title: string;
  text: string;
}

export const Empty: React.FC<EmptyPropsType> = props => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const backCatalog = () => {
    navigation.push('Books');
  };

  return (
    <View style={styles.empty}>
      <View style={styles.emptyContainer}>
        <View style={styles.emptyContent}>
          <Text style={globalStyles.textBigBold}>{props.title}</Text>
          <Text style={globalStyles.textMiddle}>{props.text}</Text>
          <CustomButton title="Go to catalog" onPress={backCatalog} />
        </View>
        <View style={styles.emptyImg}>
          <Image
            source={images.books}
            style={globalStyles.displayFull}
          />
        </View>
      </View>
    </View>
  );
};
