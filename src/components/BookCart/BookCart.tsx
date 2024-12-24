import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {styles} from './BookCart.style';
import globalStyles from 'src/styles/global.style';
import {SERVER_URL} from 'src/config/api.config';
import {CustomButton} from '../CustomButton/CustomButton';
import {IconButton} from '../IconButton/IconButton';
import {IBook} from 'src/store/bookSlice/bookSlice';
import images from 'src/assets/imgs/images';

interface IBookCartProps extends IBook {
  onPress: () => void;
}

export const BookCart: React.FC<IBookCartProps> = props => {
  return (
    <View style={styles.book}>
      <View style={styles.bookImg}>
        <Pressable onPress={props.onPress}>
          <Image
            source={{
              uri: `${SERVER_URL}/uploads/books/${props.img}`,
              method: 'GET',
            }}
            style={{width: '100%', height: '100%'}}
          />
          <View style={styles.favoriteButton}>
            <IconButton img={images.heart} background="default" isLike={true} />
          </View>
          <View style={styles.infoButton}>
            {props.isNew && <CustomButton title="New" disabled={true} />}
            {props.isBestseller && (
              <CustomButton title="Bestseller" disabled={true} />
            )}
          </View>
        </Pressable>
      </View>
      <View style={styles.bookContent}>
        <Text style={globalStyles.textBig}>{props.name}</Text>
        <Text style={globalStyles.textMiddleLight}>{props.author.text}</Text>
      </View>
      <CustomButton title={`$ ${props.cover.hardcover_price} USD`} />
    </View>
  );
};
