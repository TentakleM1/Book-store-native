import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './BookCart.style';
import globalStyles from 'src/styles/global.style';
import {SERVER_URL} from 'src/config/api.config';
import {CustomButton} from '../CustomButton/CustomButton';
import {IconButton} from '../IconButton/IconButton';
import images from 'src/assets/imgs/images';
import {IAuthor, ICover} from 'src/store/bookSlice/bookSlice';

interface IBookCartProps {
  id: number;
  name: string;
  img: string;
  isBestseller?: boolean;
  isNew?: boolean;
  author: IAuthor;
  totalRate?: number;
  cover: ICover;
}

export const BookCart: React.FC<IBookCartProps> = props => {
  return (
    <View style={styles.book}>
      <View style={styles.bookImg}>
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
      </View>
      <View style={styles.bookContent}>
        <Text style={globalStyles.textBig}>{props.name}</Text>
        <Text style={globalStyles.textMiddleLight}>{props.author.text}</Text>
      </View>
      <CustomButton title={`$ ${props.cover.hardcover_price} USD`} />
    </View>
  );
};
