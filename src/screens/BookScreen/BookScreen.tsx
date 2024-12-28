import {RouteProp} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Image, View} from 'react-native';
import globalStyles from 'src/styles/global.styles';
import {useAppSelector} from 'src/store/store';
import {SERVER_URL} from 'src/config/api.config';
import {styles} from './Book.styles';
import {CustomButton} from 'src/components/CustomButton/CustomButton';
import {CustomText} from 'src/components/CustomText/CustomText';
import FullStar from 'src/assets/svg/fullStar.svg';
import {RefreshLayout} from 'src/components/RefreshLayout/RefreshLayout';

type BookScreenPropsType = {
  route?: RouteProp<{params: {id: string}}, 'params'>;
};

export const BookScreen: React.FC<BookScreenPropsType> = ({route}) => {
  const [refreshing, setRefreshing] = useState(false);
  const book = useAppSelector(state => state.book.book);

  useEffect(() => {
    if (route?.params.id) {
      if (book.id !== Number(route.params.id)) {
        console.log('thunk book');
      }
    }
  }, [book.id, route?.params.id]);

  return (
    <RefreshLayout
      refreshing={refreshing}
      handleRefresh={() => {
       setRefreshing(true);
       setRefreshing(false);
      }}>
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
          <CustomText h2 style={globalStyles.textBigBold}>
            {book.name}
          </CustomText>
          <CustomText h3 style={globalStyles.textBlack}>
            {book.author.text}
          </CustomText>
        </View>
        <View>
          <FullStar width={40} height={40} />
          <CustomText h3 style={globalStyles.textLight}>
            {book.totalRate ? book.totalRate : '0.0'}
          </CustomText>
        </View>
        <View>
          <CustomText h2 style={globalStyles.textBlack}>
            Description
          </CustomText>
          <CustomText h3 style={globalStyles.textBlue}>
            {book.description}
          </CustomText>
        </View>
        <View style={styles.bookButtons}>
          <View style={styles.bookButton}>
            <CustomText h3 style={globalStyles.textBlue}>
              Paperback
            </CustomText>
            <CustomButton title={`$${book.cover.paperback_price} USD`} />
          </View>
          <View style={styles.bookButton}>
            <CustomText h3 style={globalStyles.textBlue}>
              Hardcover
            </CustomText>
            <CustomButton title={`$${book.cover.hardcover_price} USD`} />
          </View>
        </View>
      </View>
    </RefreshLayout>
  );
};
