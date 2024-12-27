import React from 'react';
import {Image, Text, View} from 'react-native';
import globalStyles from 'src/styles/global.styles';
import {styles} from './BookingBook.style';
import {SERVER_URL} from 'src/config/api.config';
import {IconButton} from 'src/components/IconButton/IconButton';
import Camera from 'src/assets/svg/camera.svg';

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
          <Text style={globalStyles.textBigBold}>The Weight of Things</Text>
          <Text style={globalStyles.textMiddle}>Marianne Flitz</Text>
        </View>
        <View style={styles.bookSetting}>
          <IconButton img={<Camera />} background="light" />
          <Text style={globalStyles.textMiddle}>1</Text>
          <IconButton img={<Camera />} background="light" />
          <IconButton img={<Camera />} background="none" />
        </View>
        <View>
          <Text style={globalStyles.textBig}>$14.99 USD</Text>
        </View>
      </View>
    </View>
  );
};
