import React from 'react';
import {Image, View} from 'react-native';
import globalStyles from 'src/styles/global.styles';
import {styles} from './BookingBook.style';
import {SERVER_URL} from 'src/config/api.config';
import {IconButton} from 'src/components/IconButton/IconButton';
import Delete from 'src/assets/svg/delete.svg';
import Plus from 'src/assets/svg/plus.svg';
import Minus from 'src/assets/svg/minus.svg';
import { CustomText } from 'src/components/CustomText/CustomText';

export const BookingBook: React.FC = () => {
  return (
    <View style={styles.book}>
      <View style={styles.bookImg}>
        <Image
          source={{
            uri: `${SERVER_URL}/uploads/books/dorian.png`,
            method: 'GET',
          }}
          style={globalStyles.displayFull}
        />
      </View>
      <View style={styles.bookContent}>
        <View>
          <CustomText h2 style={globalStyles.textBigBold}>The Weight of Things</CustomText>
          <CustomText h3 style={globalStyles.textBlack}>Marianne Flitz</CustomText>
        </View>
        <View style={styles.bookSetting}>
          <IconButton img={Minus} isBackground />
          <CustomText h3 style={globalStyles.textBlack}>1</CustomText>
          <IconButton img={Plus} isBackground />
          <IconButton img={Delete} isBackground />
        </View>
        <View>
          <CustomText h3 style={globalStyles.textBlack}>$14.99 USD</CustomText>
        </View>
      </View>
    </View>
  );
};
