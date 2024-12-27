import React from 'react';
import {Image, View} from 'react-native';
import {styles} from './CatalogBanner.style';
import images from 'src/assets/imgs/images';
import {CustomButton} from '../../../../components/CustomButton/CustomButton';
import globalStyles from 'src/styles/global.styles';
import { CustomText } from 'src/components/CustomText/CustomText';

export const CatalogBanner: React.FC = () => {
  return (
    <View style={styles.banner}>
      <View style={styles.transparentImg}>
        <Image source={images.books} />
      </View>
      <View style={styles.bannerTitle}>
        <CustomText h2 style={globalStyles.textBigBold}>Build your library with us</CustomText>
        <CustomText h3 style={globalStyles.textMiddle}> Buy two books and get one for free</CustomText>
        <CustomButton title={'Choose a book'} />
      </View>
      <View>
        <Image source={images.women} />
      </View>
    </View>
  );
};
