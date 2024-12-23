import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {styles} from './BookCart.style';
import globalStyles from 'src/styles/global.style';
import {SERVER_URL} from 'src/config/api.config';
import {CustomButton} from '../CustomButton/CustomButton';
import {IconButton} from '../IconButton/IconButton';
import {addBook, IBook} from 'src/store/bookSlice/bookSlice';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useAppDispatch} from 'src/store/store';
import images from 'src/assets/imgs/images';

export const BookCart: React.FC<IBook> = props => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const dispatch = useAppDispatch();
  const choiceBook = () => {
    dispatch(addBook(props));
    navigation.navigate('Book', {id: props.id});
  };
  return (
    <View style={styles.book}>
      <View style={styles.bookImg}>
        <Pressable onPress={choiceBook}>
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
