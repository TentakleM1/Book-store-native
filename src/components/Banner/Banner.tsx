import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './Banner.style';
import images from 'src/assets/imgs/images';
import {CustomButton} from '../CustomButton/CustomButton';

export const Banner: React.FC = () => {
  return (
    <View style={styles.banner}>
      <View style={styles.bannerTitle} >
        <Text style={styles.textTitle}>Build your library with us</Text>
        <Text style={styles.text}>Buy two books and get one for free</Text>
        <CustomButton title={'Choose a book'} />
      </View>
      <View>
        <Image source={images.women} />
      </View>
    </View>
  );
};
