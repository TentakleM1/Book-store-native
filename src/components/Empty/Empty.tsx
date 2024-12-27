import React from 'react';
import {Image, View} from 'react-native';
import images from 'src/assets/imgs/images';
import {CustomButton} from 'src/components/CustomButton/CustomButton';
import globalStyles from 'src/styles/global.styles';
import {styles} from './Empty.styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {CustomText} from '../CustomText/CustomText';

type EmptyPropsType = {
  title: string;
  text: string;
};

export const Empty: React.FC<EmptyPropsType> = props => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const backCatalog = () => {
    navigation.push('Home');
  };

  return (
    <View style={styles.empty}>
      <View style={styles.emptyContainer}>
        <View style={styles.emptyContent}>
          <CustomText h2 style={globalStyles.textBigBold}>{props.title}</CustomText>
          <CustomText h3 style={globalStyles.textBlack}>{props.text}</CustomText>
          <CustomButton title="Go to catalog" onPress={backCatalog} />
        </View>
        <View style={styles.emptyImg}>
          <Image source={images.books} style={globalStyles.displayFull} />
        </View>
      </View>
    </View>
  );
};
