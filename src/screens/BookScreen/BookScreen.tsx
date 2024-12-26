import {RouteProp} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import globalStyles from 'src/styles/global.styles';
import {useAppSelector} from 'src/store/store';
import {SERVER_URL} from 'src/config/api.config';
import {styles} from './Book.styles';
import {CustomButton} from 'src/components/CustomButton/CustomButton';
import images from 'src/assets/imgs/images';

type BookScreenPropsType = {
  route?: RouteProp<{params: {id: string}}, 'params'>;
}

export const BookScreen: React.FC<BookScreenPropsType> = ({route}) => {
  const book = useAppSelector(state => state.book.book);

  useEffect(() => {
    if (route?.params.id) {
      if (book.id !== Number(route.params.id)) {
        console.log('thunk book');
      }
    }
  }, [book.id, route?.params.id]);

  return (
    <SafeAreaView style={styles.book}>
        <View style={styles.bookContainer}>
          <View style={styles.bookImg}>
            <Image
              source={{
                uri: `${SERVER_URL}/uploads/books/${book.img}`,
                method: 'GET',
              }}
              style={globalStyles.displayFull}
            />
          </View>
          <View>
            <Text style={globalStyles.textBigBold}>{book.name}</Text>
            <Text style={globalStyles.textBigBlack}>{book.author.text}</Text>
          </View>
          <View>
            <Image source={images.fullStar} style={{width: 30, height: 30}} />
            <Text style={globalStyles.textMiddleLight}>
              {book.totalRate ? book.totalRate : '0.0'}
            </Text>
          </View>
          <View>
            <Text style={globalStyles.textBigBlack}>Description</Text>
            <Text style={globalStyles.textMiddle}>{book.description}</Text>
          </View>
          <View style={styles.bookButtons}>
            <View style={styles.bookButton}>
              <Text style={globalStyles.textBigBlack}>Paperback</Text>
              <CustomButton title={`$${book.cover.paperback_price} USD`} />
            </View>
            <View style={styles.bookButton}>
              <Text style={globalStyles.textBigBlack}>Hardcover</Text>
              <CustomButton title={`$${book.cover.hardcover_price} USD`} />
            </View>
          </View>
        </View>
    </SafeAreaView>
  );
};
