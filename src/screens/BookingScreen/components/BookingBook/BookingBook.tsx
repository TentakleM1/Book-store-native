import React from 'react';
import {Image, Text, View} from 'react-native';
import images from 'src/assets/imgs/images';
import globalStyles from 'src/styles/global.style';
import {styles} from './BookingBook.style';
import {SERVER_URL} from 'src/config/api.config';
import {IconButton} from 'src/components/IconButton/IconButton';

export const BookingBook: React.FC = () => {
  return (
    <View style={styles.book}>
      <View style={styles.bookImg}>
        <Image
          source={{
            uri: `${SERVER_URL}/uploads/books/dorian.png`,
            method: 'GET',
          }}
          style={{width: '100%', height: '100%'}}
        />
      </View>
      <View style={styles.bookContent}>
        <View>
          <Text style={globalStyles.textBigBold}>The Weight of Things</Text>
          <Text style={globalStyles.textMiddle}>Marianne Flitz</Text>
        </View>
        <View style={styles.bookSetting}>
          <IconButton img={images.more} background="light" />
          <Text style={globalStyles.textMiddle}>1</Text>
          <IconButton img={images.plus} background="light" />
          <IconButton img={images.delete} background="none" />
        </View>
        <View>
          <Text style={globalStyles.textBig}>$14.99 USD</Text>
        </View>
      </View>
    </View>
  );
};
