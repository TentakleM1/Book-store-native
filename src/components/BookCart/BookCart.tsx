import React, {useState} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {styles} from './BookCart.style';
import globalStyles from 'src/styles/global.styles';
import {SERVER_URL} from 'src/config/api.config';
import {CustomButton} from '../CustomButton/CustomButton';
import {IBook} from 'src/store/bookSlice/bookSlice';
import {LikeButton} from '../LikeButtom/LikeButton';

type BookCartPropsType = {
  book: IBook;
  onPress: () => void;
};

export const BookCart: React.FC<BookCartPropsType> = props => {
  const [isLikeBook, setIsLikeBook] = useState<boolean>(false);

  const handleLikeBook = () => {
    setIsLikeBook(!isLikeBook);
  };

  return (
    <View style={styles.book}>
      <View style={styles.bookImg}>
        <Pressable onPress={props.onPress}>
          <Image
            source={{
              uri: `${SERVER_URL}/uploads/books/${props.book.img}`,
              method: 'GET',
            }}
            style={globalStyles.displayFull}
          />
          <View style={styles.favoriteButton}>
            <LikeButton isLike onPress={handleLikeBook} />
          </View>
          <View style={styles.infoButton}>
            {props.book.isNew && <CustomButton title="New" disabled={true} />}
            {props.book.isBestseller && (
              <CustomButton title="Bestseller" disabled={true} />
            )}
          </View>
        </Pressable>
      </View>
      <View style={styles.bookContent}>
        <Text style={globalStyles.textBig}>{props.book.name}</Text>
        <Text style={globalStyles.textMiddleLight}>
          {props.book.author.text}
        </Text>
      </View>
      <CustomButton title={`$ ${props.book.cover.hardcover_price} USD`} />
    </View>
  );
};
