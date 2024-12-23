import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './Banner.style';
import images from 'src/assets/imgs/images';
import {CustomButton} from '../CustomButton/CustomButton';
import globalStyles from 'src/styles/global.style';

export const Banner: React.FC = () => {
  return (
    <View style={styles.banner}>
      <View style={styles.transparentImg}>
        <Image source={images.books} />
      </View>
      <View style={styles.bannerTitle}>
        <Text style={globalStyles.textBigBold}>Build your library with us</Text>
        <Text style={globalStyles.textMiddle}>
          Buy two books and get one for free
        </Text>
        <CustomButton title={'Choose a book'} />
      </View>
      <View>
        <Image source={images.women} />
      </View>
    </View>
  );
};
